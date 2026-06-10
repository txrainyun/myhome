function init() {
    renderCategories();
    renderCompactCategories();
    renderLinks();
    setupEventListeners();
    updateGreeting();
    startClock();
    setupSidebar();
}

let currentCategory = 'all';
let searchQuery = '';

// ===== Sidebar =====
function setupSidebar() {
    var toggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');
    var compactNav = document.getElementById('compactCategoryNav');
    
    if (toggle && sidebar) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            var isCollapsed = sidebar.classList.contains('collapsed');
            toggle.title = isCollapsed ? '展开侧栏' : '收起侧栏';
            
            if (compactNav) {
                compactNav.style.display = isCollapsed ? 'flex' : 'none';
            }
            
            try {
                localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
            } catch(e) {}
        });
        
        try {
            var saved = localStorage.getItem('sidebarCollapsed');
            if (saved === 'true') {
                sidebar.classList.add('collapsed');
                toggle.title = '展开侧栏';
                if (compactNav) {
                    compactNav.style.display = 'flex';
                }
            }
        } catch(e) {}
    }
}

// ===== Categories =====
function getCategoryIcon(category) {
    var icons = {
        'all': 'fa-th-large',
        'AI 工具': 'fa-robot',
        '编程开发': 'fa-code',
        '影视追剧': 'fa-film',
        '游戏专区': 'fa-gamepad',
        '学习教育': 'fa-graduation-cap',
        '实用工具': 'fa-tools',
        '社交娱乐': 'fa-comments',
        '工作相关': 'fa-briefcase',
        '阅读小说': 'fa-book-open',
        '设计素材': 'fa-palette',
        '安全/其他': 'fa-shield-alt'
    };
    return icons[category] || 'fa-folder';
}

function getCategoryCount(category) {
    if (category === 'all') {
        return navLinks.reduce(function(sum, c) { return sum + c.sites.length; }, 0);
    }
    var cat = navLinks.find(function(c) { return c.category === category; });
    return cat ? cat.sites.length : 0;
}

function renderCategories() {
    var nav = document.getElementById('categoryNav');
    nav.innerHTML = '';
    
    var categories = ['all'];
    navLinks.forEach(function(c) { categories.push(c.category); });
    
    categories.forEach(function(category) {
        var btn = document.createElement('button');
        btn.className = 'category-btn' + (currentCategory === category ? ' active' : '');
        btn.dataset.category = category;
        
        var label = category === 'all' ? '全部' : category;
        var icon = getCategoryIcon(category);
        var count = getCategoryCount(category);
        var color = category === 'all' ? '#667eea' : (categoryColors[category] || '#667eea');
        
        btn.innerHTML = '<span class="cat-icon"><i class="fas ' + icon + '"></i></span>' +
            '<span class="cat-dot" style="background:' + color + '"></span>' +
            '<span>' + label + '</span>' +
            '<span class="cat-count">' + count + '</span>';
        
        btn.addEventListener('click', function() {
            filterByCategory(category);
        });
        
        nav.appendChild(btn);
    });
}

function renderCompactCategories() {
    var nav = document.getElementById('compactCategoryNav');
    if (!nav) return;
    nav.innerHTML = '';
    
    var categories = ['all'];
    navLinks.forEach(function(c) { categories.push(c.category); });
    
    categories.forEach(function(category) {
        var btn = document.createElement('button');
        btn.className = 'compact-cat-btn' + (currentCategory === category ? ' active' : '');
        btn.dataset.category = category;
        
        var label = category === 'all' ? '全部' : category;
        var color = category === 'all' ? '#667eea' : (categoryColors[category] || '#667eea');
        
        btn.innerHTML = '<span class="cat-dot" style="background:' + color + '"></span>' + label;
        
        btn.addEventListener('click', function() {
            filterByCategory(category);
        });
        
        nav.appendChild(btn);
    });
}

// ===== Cards =====
function renderLinks() {
    var container = document.getElementById('linksContainer');
    container.innerHTML = '';
    
    var filteredLinks = [];
    
    navLinks.forEach(function(category, catIndex) {
        category.sites.forEach(function(site, siteIndex) {
            var matchesSearch = !searchQuery ||
                site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                site.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                site.url.toLowerCase().includes(searchQuery.toLowerCase());
            
            var matchesCategory = currentCategory === 'all' || category.category === currentCategory;
            
            if (matchesSearch && matchesCategory) {
                filteredLinks.push({
                    site: site,
                    category: category.category,
                    catIndex: catIndex,
                    siteIndex: siteIndex
                });
            }
        });
    });
    
    if (filteredLinks.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>没有找到匹配的书签</p></div>';
        return;
    }
    
    filteredLinks.forEach(function(item) {
        var card = createCard(item.site, item.category, item.catIndex, item.siteIndex);
        container.appendChild(card);
    });
}

function createCard(site, category, catIndex, siteIndex) {
    var card = document.createElement('div');
    card.className = 'link-card';
    card.style.setProperty('--card-color', site.color || '#667eea');
    
    var domain = '';
    try {
        domain = new URL(site.url).hostname;
    } catch(e) {
        domain = '';
    }
    
    var faviconHtml = getFaviconHtml(site, domain, catIndex, siteIndex);
    
    card.innerHTML =
        '<button class="edit-hint" title="编辑书签"><i class="fas fa-pencil-alt"></i></button>' +
        '<span class="open-hint"><i class="fas fa-external-link-alt"></i></span>' +
        '<div class="link-icon-wrapper">' +
            faviconHtml +
            '<div class="link-text">' +
                '<div class="link-title">' + escapeHtml(site.name) + '</div>' +
            '</div>' +
        '</div>' +
        '<div class="link-desc">' + escapeHtml(site.desc) + '</div>' +
        '<span class="link-category-tag">' + escapeHtml(category) + '</span>';
    
    card.addEventListener('click', function(e) {
        if (e.target.closest('.edit-hint')) return;
        window.open(site.url, '_blank', 'noopener,noreferrer');
    });
    
    card.querySelector('.edit-hint').addEventListener('click', function(e) {
        e.stopPropagation();
        openEditModal(catIndex, siteIndex);
    });
    
    return card;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// ===== Favicon =====
function getFaviconHtml(site, domain, catIndex, siteIndex) {
    if (!domain) {
        return '<div class="favicon-container">' +
            '<div class="favicon-fallback" style="background:' + (site.color || '#667eea') + '">' +
                site.name.charAt(0).toUpperCase() +
            '</div></div>';
    }
    
    var googleUrl = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=64';
    var duckUrl = 'https://icons.duckduckgo.com/ip3/' + encodeURIComponent(domain) + '.ico';
    
    var id = 'favicon-' + catIndex + '-' + siteIndex;
    var color = site.color || '#667eea';
    var initial = site.name.charAt(0).toUpperCase();
    
    return '<div class="favicon-container" id="' + id + '">' +
        '<img src="' + duckUrl + '" alt="' + escapeHtml(site.name) + '" loading="lazy" ' +
            'onerror="this.onerror=null;this.src=\'' + googleUrl + '\';this.dataset.retry=\'1\';this.addEventListener(\'error\',function(){handleFaviconError(this,\'' + initial + '\',\'' + color + '\')})" ' +
            'onload="if(this.dataset.retry){handleFaviconLoaded(this,\'' + id + '\',\'' + initial + '\',\'' + color + '\')}" ' +
            'onabort="handleFaviconError(this,\'' + initial + '\',\'' + color + '\')">' +
        '</div>';
}

window.handleFaviconError = function(img, initial, color) {
    if (img.dataset.fallbackDone === 'true') return;
    var container = img.closest('.favicon-container');
    if (!container) return;
    img.dataset.fallbackDone = 'true';
    var fallbackEl = document.createElement('div');
    fallbackEl.className = 'favicon-fallback';
    fallbackEl.style.background = color || '#667eea';
    fallbackEl.textContent = initial;
    container.innerHTML = '';
    container.appendChild(fallbackEl);
};

window.handleFaviconLoaded = function(img, id, initial, color) {
    if (img.naturalWidth > 10 && img.naturalHeight > 10) return;
    window.handleFaviconError(img, initial, color);
};

// ===== Filter =====
function filterByCategory(category) {
    currentCategory = category;
    
    // Update sidebar buttons
    document.querySelectorAll('.category-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Update compact nav buttons
    document.querySelectorAll('.compact-cat-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderLinks();
}

// ===== Event Listeners =====
function setupEventListeners() {
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value;
        renderLinks();
    });
    
    var btnAdd = document.getElementById('btnAddBookmark');
    var addModal = document.getElementById('addModal');
    var closeModal = document.getElementById('closeModal');
    var cancelAdd = document.getElementById('cancelAdd');
    
    if (btnAdd) {
        btnAdd.addEventListener('click', function() {
            addModal.classList.add('show');
        });
    }
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            addModal.classList.remove('show');
        });
    }
    if (cancelAdd) {
        cancelAdd.addEventListener('click', function() {
            addModal.classList.remove('show');
        });
    }
    
    var addForm = document.getElementById('addBookmarkForm');
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addBookmark();
    });
    
    var editModal = document.getElementById('editModal');
    var closeEditModal = document.getElementById('closeEditModal');
    var cancelEdit = document.getElementById('cancelEdit');
    
    if (closeEditModal) {
        closeEditModal.addEventListener('click', function() {
            editModal.classList.remove('show');
        });
    }
    if (cancelEdit) {
        cancelEdit.addEventListener('click', function() {
            editModal.classList.remove('show');
        });
    }
    
    var editForm = document.getElementById('editBookmarkForm');
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveEdit();
    });
    
    var deleteBtn = document.getElementById('deleteBookmark');
    deleteBtn.addEventListener('click', function() {
        deleteBookmark();
    });
    
    addModal.addEventListener('click', function(e) {
        if (e.target === addModal) addModal.classList.remove('show');
    });
    editModal.addEventListener('click', function(e) {
        if (e.target === editModal) editModal.classList.remove('show');
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(function(m) {
                m.classList.remove('show');
            });
        }
    });
}

// ===== CRUD =====
function addBookmark() {
    var name = document.getElementById('bookmarkName').value.trim();
    var url = document.getElementById('bookmarkUrl').value.trim();
    var desc = document.getElementById('bookmarkDesc').value.trim();
    var category = document.getElementById('bookmarkCategory').value;
    
    if (!name || !url) {
        showToast('请填写名称和网址');
        return;
    }
    if (!url.match(/^https?:\/\//)) {
        url = 'https://' + url;
    }
    
    var colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140', '#a18cd1'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    
    var newBookmark = {
        name: name,
        url: url,
        desc: desc || '暂无描述',
        icon: 'fas fa-globe',
        color: color
    };
    
    var categoryData = navLinks.find(function(c) { return c.category === category; });
    if (categoryData) {
        categoryData.sites.push(newBookmark);
        saveBookmarks();
        renderLinks();
        renderCategories();
        renderCompactCategories();
        
        if (currentCategory !== 'all' && currentCategory !== category) {
            filterByCategory(category);
        }
        
        document.getElementById('addModal').classList.remove('show');
        document.getElementById('addBookmarkForm').reset();
        showToast('书签添加成功！');
    }
}

function openEditModal(catIndex, siteIndex) {
    var category = navLinks[catIndex];
    var site = category.sites[siteIndex];
    
    document.getElementById('editIndex').value = siteIndex;
    document.getElementById('editCategoryIndex').value = catIndex;
    document.getElementById('editBookmarkName').value = site.name;
    document.getElementById('editBookmarkUrl').value = site.url;
    document.getElementById('editBookmarkDesc').value = site.desc;
    
    document.getElementById('editModal').classList.add('show');
}

function saveEdit() {
    var catIndex = parseInt(document.getElementById('editCategoryIndex').value);
    var siteIndex = parseInt(document.getElementById('editIndex').value);
    
    var category = navLinks[catIndex];
    var site = category.sites[siteIndex];
    
    site.name = document.getElementById('editBookmarkName').value.trim();
    var url = document.getElementById('editBookmarkUrl').value.trim();
    site.desc = document.getElementById('editBookmarkDesc').value.trim();
    
    if (!url.match(/^https?:\/\//)) {
        url = 'https://' + url;
    }
    site.url = url;
    
    saveBookmarks();
    renderLinks();
    renderCategories();
    renderCompactCategories();
    document.getElementById('editModal').classList.remove('show');
    showToast('书签已更新');
}

function deleteBookmark() {
    var catIndex = parseInt(document.getElementById('editCategoryIndex').value);
    var siteIndex = parseInt(document.getElementById('editIndex').value);
    
    if (confirm('确定要删除这个书签吗？')) {
        navLinks[catIndex].sites.splice(siteIndex, 1);
        saveBookmarks();
        renderLinks();
        renderCategories();
        renderCompactCategories();
        document.getElementById('editModal').classList.remove('show');
        showToast('书签已删除');
    }
}

// ===== Persistence =====
function saveBookmarks() {
    try {
        localStorage.setItem('navLinks', JSON.stringify(navLinks));
    } catch (e) {
        console.warn('Failed to save bookmarks:', e);
    }
}

function loadBookmarks() {
    try {
        var saved = localStorage.getItem('navLinks');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                navLinks.length = 0;
                parsed.forEach(function(item) { navLinks.push(item); });
            }
        }
    } catch (e) {
        console.warn('Failed to load bookmarks:', e);
    }
}

// ===== Greeting & Clock =====
function updateGreeting() {
    var greetingEl = document.getElementById('greeting');
    if (!greetingEl) return;
    
    var hour = new Date().getHours();
    var timeText = '';
    var icon = '';
    
    if (hour < 6) {
        timeText = '夜深了';
        icon = '🌙';
    } else if (hour < 9) {
        timeText = '早上好';
        icon = '🌅';
    } else if (hour < 12) {
        timeText = '上午好';
        icon = '☀️';
    } else if (hour < 14) {
        timeText = '中午好';
        icon = '🌞';
    } else if (hour < 18) {
        timeText = '下午好';
        icon = '🌤️';
    } else if (hour < 22) {
        timeText = '晚上好';
        icon = '🌆';
    } else {
        timeText = '夜深了';
        icon = '🌙';
    }
    
    greetingEl.textContent = icon + ' ' + timeText + '，开始探索吧';
}

function startClock() {
    function updateClock() {
        var now = new Date();
        var h = String(now.getHours()).padStart(2, '0');
        var m = String(now.getMinutes()).padStart(2, '0');
        var s = String(now.getSeconds()).padStart(2, '0');
        
        var display = document.getElementById('clockDisplay');
        if (display) {
            display.textContent = h + ':' + m + ':' + s;
        }
        
        var dateDisplay = document.getElementById('clockDate');
        if (dateDisplay) {
            var year = now.getFullYear();
            var month = String(now.getMonth() + 1).padStart(2, '0');
            var day = String(now.getDate()).padStart(2, '0');
            var weekdays = ['日', '一', '二', '三', '四', '五', '六'];
            var weekday = weekdays[now.getDay()];
            dateDisplay.textContent = year + '年' + month + '月' + day + '日 星期' + weekday;
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

function showToast(message) {
    var toast = document.querySelector('.hint-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'hint-toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function() {
        toast.classList.remove('show');
    }, 2000);
}

// ===== Init =====
loadBookmarks();

document.addEventListener('DOMContentLoaded', function() {
    init();
});

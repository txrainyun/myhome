let currentCategory = 'all';
let searchQuery = '';

function init() {
    console.log('Initializing...');
    console.log('Total categories:', navLinks.length);
    let totalBookmarks = 0;
    navLinks.forEach(cat => { totalBookmarks += cat.sites.length; });
    console.log('Total bookmarks:', totalBookmarks);
    loadBookmarks();
    renderCategories();
    bindAllCategoryButton();
    renderLinks();
    setupEventListeners();
    updateGreeting();
    updateTime();
    setInterval(updateTime, 1000);
    console.log('Init complete!');
}

function loadBookmarks() {
    const saved = localStorage.getItem('personalNavBookmarks');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            navLinks.forEach((cat) => {
                const savedCat = parsed.find(function(p) { return p.category === cat.category; });
                if (savedCat) {
                    cat.sites = savedCat.sites;
                }
            });
        } catch (e) {
            console.error('Failed to load bookmarks:', e);
        }
    }
}

function saveBookmarks() {
    localStorage.setItem('personalNavBookmarks', JSON.stringify(navLinks));
    console.log('Bookmarks saved!');
}

function updateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('timeDisplay').textContent = now.toLocaleString('zh-CN', options);
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 6) { greeting = '🌙 夜深了，注意休息'; }
    else if (hour < 9) { greeting = '🌅 早上好，新的一天开始了'; }
    else if (hour < 12) { greeting = '☀️ 上午好，加油！'; }
    else if (hour < 14) { greeting = '🌞 中午好，记得午休'; }
    else if (hour < 18) { greeting = '🌤️ 下午好，继续加油'; }
    else if (hour < 22) { greeting = '🌆 晚上好，辛苦了一天'; }
    else { greeting = '🌙 夜深了，早点休息'; }
    document.getElementById('greeting').textContent = greeting;
}

function bindAllCategoryButton() {
    const allBtn = document.querySelector('.category-btn[data-category="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', function() { filterByCategory('all'); });
    }
}

function renderCategories() {
    const categoryNav = document.querySelector('.category-nav');
    categoryNav.innerHTML = '';
    
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.dataset.category = 'all';
    allBtn.innerHTML = '<i class="fas fa-th-large"></i> 全部';
    allBtn.addEventListener('click', function() { filterByCategory('all'); });
    categoryNav.appendChild(allBtn);
    
    navLinks.forEach(function(cat) {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = cat.category;
        btn.innerHTML = '<i class="fas fa-folder"></i> ' + cat.category;
        btn.addEventListener('click', function() { filterByCategory(cat.category); });
        categoryNav.appendChild(btn);
    });
    
    console.log('Categories rendered:', navLinks.length);
}

function renderLinks() {
    const container = document.getElementById('linksContainer');
    container.innerHTML = '';
    
    let hasResults = false;
    
    navLinks.forEach(function(categoryData, catIndex) {
        if (currentCategory !== 'all' && categoryData.category !== currentCategory) {
            return;
        }
        
        categoryData.sites.forEach(function(site, siteIndex) {
            if (searchQuery && !site.name.toLowerCase().includes(searchQuery.toLowerCase()) && !site.desc.toLowerCase().includes(searchQuery.toLowerCase())) {
                return;
            }
            
            hasResults = true;
            const card = createLinkCard(site, categoryData.category, catIndex, siteIndex);
            container.appendChild(card);
        });
    });
    
    if (!hasResults) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><i class="fas fa-search"></i><p>没有找到匹配的书签</p></div>';
    }
    
    console.log('Links rendered:', container.children.length);
}

function createLinkCard(site, category, catIndex, siteIndex) {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.style.setProperty('--card-color', site.color || '#667eea');
    
    const urlObj = new URL(site.url);
    const faviconUrl = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(urlObj.hostname) + '&sz=64';
    
    const faviconHtml = '<div class="favicon-container"><img src="' + faviconUrl + '" alt="' + site.name + '" loading="lazy"></div>';
    
    card.innerHTML = 
        '<i class="fas fa-edit edit-hint" title="点击编辑"></i>' +
        faviconHtml +
        '<div class="link-title">' + site.name + '</div>' +
        '<div class="link-desc">' + site.desc + '</div>' +
        '<span class="link-category">' + category + '</span>';
    
    card.addEventListener('click', function(e) {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.open(site.url, '_blank');
            return;
        }
        e.preventDefault();
        openEditModal(catIndex, siteIndex);
    });
    
    card.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        window.open(site.url, '_blank');
    });
    
    return card;
}

function filterByCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderLinks();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value;
        renderLinks();
    });
    
    const btnAdd = document.getElementById('btnAddBookmark');
    const addModal = document.getElementById('addModal');
    const closeModal = document.getElementById('closeModal');
    const cancelAdd = document.getElementById('cancelAdd');
    
    console.log('btnAdd:', btnAdd);
    console.log('addModal:', addModal);
    
    if (btnAdd) {
        btnAdd.addEventListener('click', function() {
            console.log('Add button clicked!');
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
    
    const addForm = document.getElementById('addBookmarkForm');
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addBookmark();
    });
    
    const editModal = document.getElementById('editModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const cancelEdit = document.getElementById('cancelEdit');
    
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
    
    const editForm = document.getElementById('editBookmarkForm');
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveEdit();
    });
    
    const deleteBtn = document.getElementById('deleteBookmark');
    deleteBtn.addEventListener('click', function() {
        deleteBookmark();
    });
    
    addModal.addEventListener('click', function(e) {
        if (e.target === addModal) {
            addModal.classList.remove('show');
        }
    });
    
    editModal.addEventListener('click', function(e) {
        if (e.target === editModal) {
            editModal.classList.remove('show');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(function(m) {
                m.classList.remove('show');
            });
        }
    });
}

function addBookmark() {
    const nameEl = document.getElementById('bookmarkName');
    const urlEl = document.getElementById('bookmarkUrl');
    const descEl = document.getElementById('bookmarkDesc');
    const catEl = document.getElementById('bookmarkCategory');
    
    const name = nameEl.value.trim();
    let url = urlEl.value.trim();
    const desc = descEl.value.trim();
    const category = catEl.value;
    
    if (!name || !url) {
        alert('请填写名称和网址');
        return;
    }
    
    if (!url.match(/^https?:\/\//)) {
        url = 'https://' + url;
    }
    
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140', '#a18cd1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const newBookmark = {
        name: name,
        url: url,
        desc: desc || '暂无描述',
        icon: 'fas fa-globe',
        color: color
    };
    
    const categoryData = navLinks.find(function(c) { return c.category === category; });
    if (categoryData) {
        categoryData.sites.push(newBookmark);
        saveBookmarks();
        renderLinks();
        
        if (currentCategory !== 'all' && currentCategory !== category) {
            filterByCategory(category);
        }
        
        document.getElementById('addModal').classList.remove('show');
        document.getElementById('addBookmarkForm').reset();
        alert('书签添加成功！');
    }
}

function openEditModal(catIndex, siteIndex) {
    const category = navLinks[catIndex];
    const site = category.sites[siteIndex];
    
    document.getElementById('editIndex').value = siteIndex;
    document.getElementById('editCategoryIndex').value = catIndex;
    document.getElementById('editBookmarkName').value = site.name;
    document.getElementById('editBookmarkUrl').value = site.url;
    document.getElementById('editBookmarkDesc').value = site.desc;
    
    document.getElementById('editModal').classList.add('show');
}

function saveEdit() {
    const catIndex = parseInt(document.getElementById('editCategoryIndex').value);
    const siteIndex = parseInt(document.getElementById('editIndex').value);
    
    const category = navLinks[catIndex];
    const site = category.sites[siteIndex];
    
    site.name = document.getElementById('editBookmarkName').value.trim();
    let url = document.getElementById('editBookmarkUrl').value.trim();
    site.desc = document.getElementById('editBookmarkDesc').value.trim();
    
    if (!url.match(/^https?:\/\//)) {
        url = 'https://' + url;
    }
    site.url = url;
    
    saveBookmarks();
    renderLinks();
    document.getElementById('editModal').classList.remove('show');
}

function deleteBookmark() {
    const catIndex = parseInt(document.getElementById('editCategoryIndex').value);
    const siteIndex = parseInt(document.getElementById('editIndex').value);
    
    if (confirm('确定要删除这个书签吗？')) {
        navLinks[catIndex].sites.splice(siteIndex, 1);
        saveBookmarks();
        renderLinks();
        document.getElementById('editModal').classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired!');
    init();
});
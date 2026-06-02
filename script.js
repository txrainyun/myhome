let currentCategory = 'all';
let searchQuery = '';

function init() {
    renderCategories();
    bindAllCategoryButton();
    renderLinks();
    setupEventListeners();
}

function bindAllCategoryButton() {
    const allBtn = document.querySelector('.category-btn[data-category="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', () => filterByCategory('all'));
    }
}

function renderCategories() {
    const categoryNav = document.querySelector('.category-nav');
    navLinks.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = cat.category;
        btn.textContent = cat.category;
        btn.addEventListener('click', () => filterByCategory(cat.category));
        categoryNav.appendChild(btn);
    });
}

function renderLinks() {
    const container = document.getElementById('linksContainer');
    container.innerHTML = '';
    
    navLinks.forEach(categoryData => {
        if (currentCategory !== 'all' && categoryData.category !== currentCategory) {
            return;
        }
        
        categoryData.sites.forEach(site => {
            if (searchQuery && !site.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
                !site.desc.toLowerCase().includes(searchQuery.toLowerCase())) {
                return;
            }
            
            const card = createLinkCard(site, categoryData.category);
            container.appendChild(card);
        });
    });
}

function createLinkCard(site, category) {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = site.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    card.innerHTML = `
        <div class="link-icon" style="background: ${site.color}20;">
            <i class="${site.icon}" style="color: ${site.color};"></i>
        </div>
        <div class="link-title">${site.name}</div>
        <div class="link-desc">${site.desc}</div>
        <span class="link-category">${category}</span>
    `;
    
    return card;
}

function filterByCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderLinks();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderLinks();
    });
}

document.addEventListener('DOMContentLoaded', init);
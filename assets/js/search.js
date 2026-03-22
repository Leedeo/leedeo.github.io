// assets/js/search.js
(function () {
    var searchInput = document.getElementById('blog-search');
    if (!searchInput) return;

    var clearBtn        = document.getElementById('search-clear');
    var noResults       = document.getElementById('no-results');
    var termDisplay     = document.getElementById('search-term-display');
    var paginatedPosts  = document.getElementById('paginated-posts');
    var searchContainer = document.getElementById('search-results-container');
    var searchGrid      = document.getElementById('search-results-grid');
    var blogUrl         = searchInput.dataset.blogUrl || '/blog/';

    var posts      = [];
    var dataLoaded = false;

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function buildCard(post) {
        var thumb = post.thumbnail || '/assets/img/ui/favicon.png';
        return '<article class="group flex items-start gap-5 p-4 rounded-2xl border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.02] transition-all duration-300">' +
            '<a href="' + post.url + '" class="flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden block">' +
            '<img src="' + thumb + '" alt="' + escapeHtml(post.title) + '" loading="lazy" width="112" height="80" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">' +
            '</a>' +
            '<div class="flex flex-col flex-grow min-w-0">' +
            '<div class="flex items-center gap-2 mb-1.5">' +
            '<img src="' + post.authorAvatar + '" alt="' + escapeHtml(post.authorName) + '" class="w-4 h-4 rounded-full object-cover border border-violet-300/70 flex-shrink-0" width="16" height="16" loading="lazy">' +
            '<span class="text-slate-600 text-[10px] font-bold uppercase tracking-widest">' + escapeHtml(post.authorName) + '</span>' +
            '<span class="text-slate-700 text-[10px]">·</span>' +
            '<span class="text-violet-400 text-[10px] font-bold uppercase tracking-widest">' + post.date + '</span>' +
            '</div>' +
            '<h2 class="text-base font-bold text-white group-hover:text-violet-400 transition-colors mb-1 line-clamp-2"><a href="' + post.url + '">' + escapeHtml(post.title) + '</a></h2>' +
            '<p class="text-slate-500 text-xs leading-relaxed line-clamp-2">' + escapeHtml(post.excerpt) + '</p>' +
            '</div></article>';
    }

    function performSearch(query) {
        var q = query.trim().toLowerCase();
        if (!q) {
            paginatedPosts.classList.remove('hidden');
            searchContainer.classList.add('hidden');
            noResults.classList.add('hidden');
            if (clearBtn) clearBtn.classList.add('hidden');
            return;
        }
        if (clearBtn) clearBtn.classList.remove('hidden');
        var filtered = posts.filter(function (post) {
            return (post.title.toLowerCase().includes(q) ||
                (post.excerpt && post.excerpt.toLowerCase().includes(q)) ||
                (post.categories && post.categories.toLowerCase().includes(q)));
        });
        paginatedPosts.classList.add('hidden');
        searchContainer.classList.remove('hidden');
        if (filtered.length === 0) {
            searchGrid.innerHTML = '';
            noResults.classList.remove('hidden');
            if (termDisplay) termDisplay.textContent = query.trim();
        } else {
            noResults.classList.add('hidden');
            searchGrid.innerHTML = filtered.map(buildCard).join('');
        }
    }

    function loadData() {
        if (dataLoaded) return Promise.resolve();
        return fetch('/search.json')
            .then(function (res) { return res.json(); })
            .then(function (data) { posts = data; dataLoaded = true; })
            .catch(function (err) { console.warn('No se pudo cargar search.json', err); });
    }

    searchInput.addEventListener('focus', loadData);

    var debounceTimer;
    searchInput.addEventListener('input', function () {
        clearTimeout(debounceTimer);
        var q = this.value;
        debounceTimer = setTimeout(function () {
            if (window.location.pathname !== blogUrl) {
                if (q.trim()) { window.location.href = blogUrl + '?search=' + encodeURIComponent(q.trim()); }
                return;
            }
            loadData().then(function () { performSearch(q); });
        }, 220);
    });

    searchInput.addEventListener('keydown', function (e) { if (e.key === 'Escape') { searchInput.value = ''; performSearch(''); searchInput.focus(); } });
    if (clearBtn) clearBtn.addEventListener('click', function () { searchInput.value = ''; performSearch(''); searchInput.focus(); });

    var urlParams   = new URLSearchParams(window.location.search);
    var searchParam = urlParams.get('search');
    if (searchParam) {
        loadData().then(function () {
            searchInput.value = searchParam;
            performSearch(searchParam);
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
})();

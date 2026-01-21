// Initialize particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navigation
const navBtns = document.querySelectorAll('.nav-btn');
const sections = {
    'analyzer': document.getElementById('analyzer-section'),
    'history': document.getElementById('history-section')
};

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSection = btn.dataset.section;

        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        Object.keys(sections).forEach(key => {
            sections[key].classList.add('hidden');
        });
        sections[targetSection].classList.remove('hidden');
    });
});

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tabPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(targetTab + '-panel').classList.add('active');
    });
});

// SEO Analysis Engine
class SEOAnalyzer {
    constructor(url) {
        this.url = url;
        this.results = {
            overall: 0,
            authority: {},
            relevance: {},
            proximity: {},
            technical: {},
            keywords: [],
            backlinks: {},
            content: {},
            recommendations: []
        };
    }

    async analyze() {
        try {
            // Simulate API calls with realistic data
            await this.analyzeAuthority();
            await this.analyzeRelevance();
            await this.analyzeProximity();
            await this.analyzeTechnical();
            await this.analyzeKeywords();
            await this.analyzeBacklinks();
            await this.analyzeContent();
            this.calculateOverallScore();
            this.generateRecommendations();

            return this.results;
        } catch (error) {
            console.error('Analysis error:', error);
            throw error;
        }
    }

    async analyzeAuthority() {
        await this.delay(800);

        // Simulate authority metrics
        const domain = new URL(this.url).hostname;
        const domainAge = this.estimateDomainAge(domain);
        const hasSSL = this.url.startsWith('https://');

        const domainAuthority = Math.min(100, 30 + (domainAge * 5) + (hasSSL ? 15 : 0) + Math.random() * 30);
        const pageAuthority = domainAuthority * (0.7 + Math.random() * 0.3);
        const trustFlow = Math.min(100, domainAuthority * 0.8 + Math.random() * 20);

        this.results.authority = {
            score: Math.round((domainAuthority + pageAuthority + trustFlow) / 3),
            domainAuthority: Math.round(domainAuthority),
            pageAuthority: Math.round(pageAuthority),
            trustFlow: Math.round(trustFlow)
        };
    }

    async analyzeRelevance() {
        await this.delay(700);

        const contentQuality = 60 + Math.random() * 35;
        const keywordDensity = 50 + Math.random() * 40;
        const topicMatch = 55 + Math.random() * 40;

        this.results.relevance = {
            score: Math.round((contentQuality + keywordDensity + topicMatch) / 3),
            contentQuality: Math.round(contentQuality),
            keywordDensity: Math.round(keywordDensity),
            topicMatch: Math.round(topicMatch)
        };
    }

    async analyzeProximity() {
        await this.delay(600);

        const hasLocalKeywords = Math.random() > 0.5;
        const localSEO = hasLocalKeywords ? 70 + Math.random() * 25 : 40 + Math.random() * 30;
        const napConsistency = 60 + Math.random() * 35;
        const gmbStatus = Math.random() > 0.3 ? 80 + Math.random() * 20 : 40 + Math.random() * 30;

        this.results.proximity = {
            score: Math.round((localSEO + napConsistency + gmbStatus) / 3),
            localSEO: Math.round(localSEO),
            napConsistency: Math.round(napConsistency),
            gmbStatus: Math.round(gmbStatus)
        };
    }

    async analyzeTechnical() {
        await this.delay(900);

        const hasSSL = this.url.startsWith('https://');
        const metaTags = 70 + Math.random() * 25;
        const hasSitemap = Math.random() > 0.4;
        const sitemapScore = hasSitemap ? 85 + Math.random() * 15 : 30 + Math.random() * 20;
        const pageSpeed = 50 + Math.random() * 45;

        this.results.technical = {
            score: Math.round((metaTags + sitemapScore + pageSpeed) / 3),
            metaTags: Math.round(metaTags),
            sitemap: hasSitemap ? 'Found' : 'Not Found',
            sitemapScore: Math.round(sitemapScore),
            pageSpeed: Math.round(pageSpeed),
            ssl: hasSSL,
            mobile: Math.random() > 0.3,
            structured: Math.random() > 0.5
        };
    }

    async analyzeKeywords() {
        await this.delay(750);

        const domain = new URL(this.url).hostname;
        const keywords = this.generateKeywords(domain);

        this.results.keywords = keywords;
    }

    async analyzeBacklinks() {
        await this.delay(850);

        const totalBacklinks = Math.floor(100 + Math.random() * 10000);
        const referringDomains = Math.floor(totalBacklinks * (0.1 + Math.random() * 0.2));
        const doFollowLinks = Math.floor(totalBacklinks * (0.4 + Math.random() * 0.3));
        const linkQuality = 50 + Math.random() * 45;

        this.results.backlinks = {
            total: totalBacklinks,
            referringDomains: referringDomains,
            doFollow: doFollowLinks,
            quality: Math.round(linkQuality),
            distribution: {
                high: Math.floor(totalBacklinks * 0.2),
                medium: Math.floor(totalBacklinks * 0.5),
                low: Math.floor(totalBacklinks * 0.3)
            }
        };
    }

    async analyzeContent() {
        await this.delay(650);

        const wordCount = 500 + Math.floor(Math.random() * 2000);
        const readability = 60 + Math.random() * 35;
        const uniqueness = 70 + Math.random() * 25;
        const mediaPresence = Math.random() > 0.5;

        this.results.content = {
            wordCount: wordCount,
            readability: Math.round(readability),
            uniqueness: Math.round(uniqueness),
            hasImages: mediaPresence,
            hasVideos: Math.random() > 0.6,
            headingStructure: Math.random() > 0.4
        };
    }

    calculateOverallScore() {
        const scores = [
            this.results.authority.score,
            this.results.relevance.score,
            this.results.proximity.score,
            this.results.technical.score
        ];

        this.results.overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }

    generateRecommendations() {
        const recs = [];

        if (this.results.technical.score < 70) {
            recs.push({
                type: 'critical',
                title: 'Improve Technical SEO',
                description: 'Focus on meta tags, site speed, and mobile optimization'
            });
        }

        if (!this.results.technical.ssl) {
            recs.push({
                type: 'critical',
                title: 'Enable SSL Certificate',
                description: 'HTTPS is essential for security and SEO ranking'
            });
        }

        if (this.results.technical.sitemap === 'Not Found') {
            recs.push({
                type: 'high',
                title: 'Create XML Sitemap',
                description: 'Help search engines discover and index your pages'
            });
        }

        if (this.results.authority.score < 60) {
            recs.push({
                type: 'high',
                title: 'Build Domain Authority',
                description: 'Focus on quality backlinks and content marketing'
            });
        }

        if (this.results.relevance.score < 70) {
            recs.push({
                type: 'medium',
                title: 'Optimize Content Relevance',
                description: 'Improve keyword usage and topic alignment'
            });
        }

        if (this.results.backlinks.quality < 60) {
            recs.push({
                type: 'medium',
                title: 'Improve Backlink Quality',
                description: 'Focus on acquiring links from authoritative domains'
            });
        }

        if (this.results.proximity.score < 65) {
            recs.push({
                type: 'medium',
                title: 'Enhance Local SEO',
                description: 'Optimize Google My Business and local citations'
            });
        }

        if (this.results.content.wordCount < 800) {
            recs.push({
                type: 'low',
                title: 'Increase Content Length',
                description: 'Longer, comprehensive content tends to rank better'
            });
        }

        this.results.recommendations = recs;
    }

    estimateDomainAge(domain) {
        // Simulate domain age based on domain characteristics
        const tlds = ['.com', '.org', '.net', '.edu', '.gov'];
        const hasPremiumTLD = tlds.some(tld => domain.endsWith(tld));
        return hasPremiumTLD ? 3 + Math.random() * 7 : 1 + Math.random() * 4;
    }

    generateKeywords(domain) {
        const baseKeywords = domain.replace(/\.(com|org|net|io|co|ai)/g, '').split(/[.-]/);
        const keywords = [];

        baseKeywords.forEach(keyword => {
            if (keyword.length > 2) {
                keywords.push({
                    keyword: keyword,
                    frequency: Math.floor(10 + Math.random() * 50),
                    density: (1 + Math.random() * 4).toFixed(1) + '%'
                });
            }
        });

        // Add some generic important keywords
        const important = ['services', 'business', 'professional', 'quality', 'solutions'];
        for (let i = 0; i < 3; i++) {
            const word = important[Math.floor(Math.random() * important.length)];
            keywords.push({
                keyword: word,
                frequency: Math.floor(5 + Math.random() * 30),
                density: (0.5 + Math.random() * 2).toFixed(1) + '%'
            });
        }

        return keywords.slice(0, 10);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// UI Controller
class UIController {
    constructor() {
        this.form = document.getElementById('seo-form');
        this.urlInput = document.getElementById('url-input');
        this.analyzeBtn = document.getElementById('analyze-btn');
        this.resultsSection = document.getElementById('results-section');
        this.charts = {};
        this.history = this.loadHistory();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.renderHistory();
    }

    async handleSubmit(e) {
        e.preventDefault();

        const url = this.urlInput.value.trim();
        if (!this.validateURL(url)) {
            alert('Please enter a valid URL');
            return;
        }

        this.showLoading();

        try {
            const analyzer = new SEOAnalyzer(url);
            const results = await analyzer.analyze();

            this.displayResults(results, url);
            this.saveToHistory(url, results);
            this.hideLoading();
        } catch (error) {
            alert('Error analyzing website. Please try again.');
            this.hideLoading();
        }
    }

    validateURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    showLoading() {
        this.analyzeBtn.classList.add('loading');
        this.analyzeBtn.disabled = true;
    }

    hideLoading() {
        this.analyzeBtn.classList.remove('loading');
        this.analyzeBtn.disabled = false;
    }

    displayResults(results, url) {
        this.resultsSection.classList.remove('hidden');

        // Scroll to results
        setTimeout(() => {
            this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        // Update overall score
        this.updateOverallScore(results.overall);

        // Update pillar scores
        document.getElementById('authority-score').textContent = results.authority.score;
        document.getElementById('relevance-score').textContent = results.relevance.score;
        document.getElementById('proximity-score').textContent = results.proximity.score;
        document.getElementById('technical-score').textContent = results.technical.score;

        // Update authority metrics
        document.getElementById('domain-authority').textContent = results.authority.domainAuthority;
        document.getElementById('page-authority').textContent = results.authority.pageAuthority;
        document.getElementById('trust-flow').textContent = results.authority.trustFlow;

        // Update relevance metrics
        document.getElementById('content-quality').textContent = results.relevance.contentQuality + '%';
        document.getElementById('keyword-density').textContent = results.relevance.keywordDensity + '%';
        document.getElementById('topic-match').textContent = results.relevance.topicMatch + '%';

        // Update proximity metrics
        document.getElementById('local-seo').textContent = results.proximity.localSEO + '%';
        document.getElementById('nap-consistency').textContent = results.proximity.napConsistency + '%';
        document.getElementById('gmb-status').textContent = results.proximity.gmbStatus + '%';

        // Update technical metrics
        document.getElementById('meta-tags').textContent = results.technical.metaTags + '%';
        document.getElementById('sitemap').textContent = results.technical.sitemap;
        document.getElementById('page-speed').textContent = results.technical.pageSpeed + '/100';

        // Update detailed tabs
        this.updateMetaTagsList(results.technical);
        this.updateKeywordsList(results.keywords);
        this.updateBacklinksData(results.backlinks);
        this.updateTechnicalList(results.technical);
        this.updateContentList(results.content);
        this.updateRecommendationsList(results.recommendations);

        // Update charts
        this.createKeywordsChart(results.keywords);
        this.createBacklinksChart(results.backlinks);
    }

    updateOverallScore(score) {
        const scoreValue = document.getElementById('score-value');
        const scoreCircle = document.getElementById('score-circle');
        const statusBadge = document.querySelector('.status-badge');

        // Animate score
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            scoreValue.textContent = current;

            if (current >= score) {
                clearInterval(interval);
            }
        }, 20);

        // Update circle
        const circumference = 565;
        const offset = circumference - (score / 100) * circumference;
        scoreCircle.style.strokeDashoffset = offset;

        // Update status
        let status, className;
        if (score >= 80) {
            status = 'Excellent';
            className = 'excellent';
        } else if (score >= 60) {
            status = 'Good';
            className = 'good';
        } else if (score >= 40) {
            status = 'Fair';
            className = 'fair';
        } else {
            status = 'Needs Improvement';
            className = 'poor';
        }

        statusBadge.textContent = status;
        statusBadge.className = 'status-badge ' + className;
    }

    updateMetaTagsList(technical) {
        const list = document.getElementById('meta-tags-list');
        list.innerHTML = '';

        const metaTags = [
            { label: 'Title Tag', value: technical.metaTags > 70 ? 'Optimized' : 'Needs Work', status: technical.metaTags > 70 },
            { label: 'Meta Description', value: technical.metaTags > 60 ? 'Present' : 'Missing', status: technical.metaTags > 60 },
            { label: 'Open Graph Tags', value: technical.structured ? 'Present' : 'Missing', status: technical.structured },
            { label: 'Robots.txt', value: 'Found', status: true },
            { label: 'Canonical Tags', value: technical.metaTags > 65 ? 'Implemented' : 'Missing', status: technical.metaTags > 65 }
        ];

        metaTags.forEach(tag => {
            const item = this.createDetailItem(tag.label, tag.value, tag.status);
            list.appendChild(item);
        });
    }

    updateKeywordsList(keywords) {
        const list = document.getElementById('keywords-list');
        list.innerHTML = '';

        keywords.slice(0, 8).forEach(kw => {
            const item = this.createDetailItem(kw.keyword, `${kw.frequency} occurrences (${kw.density})`, true);
            list.appendChild(item);
        });
    }

    updateBacklinksData(backlinks) {
        document.getElementById('total-backlinks').textContent = backlinks.total.toLocaleString();
        document.getElementById('referring-domains').textContent = backlinks.referringDomains.toLocaleString();
        document.getElementById('dofollow-links').textContent = backlinks.doFollow.toLocaleString();
        document.getElementById('link-quality').textContent = backlinks.quality + '/100';
    }

    updateTechnicalList(technical) {
        const list = document.getElementById('technical-list');
        list.innerHTML = '';

        const items = [
            { label: 'SSL Certificate', value: technical.ssl ? 'Enabled' : 'Disabled', status: technical.ssl },
            { label: 'Mobile Responsive', value: technical.mobile ? 'Yes' : 'No', status: technical.mobile },
            { label: 'XML Sitemap', value: technical.sitemap, status: technical.sitemap === 'Found' },
            { label: 'Robots.txt', value: 'Found', status: true },
            { label: 'Structured Data', value: technical.structured ? 'Implemented' : 'Missing', status: technical.structured }
        ];

        items.forEach(item => {
            list.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });

        const perfList = document.getElementById('performance-list');
        perfList.innerHTML = '';

        const perfItems = [
            { label: 'Page Load Time', value: (1 + Math.random() * 3).toFixed(2) + 's', status: true },
            { label: 'First Contentful Paint', value: (0.5 + Math.random() * 2).toFixed(2) + 's', status: true },
            { label: 'Time to Interactive', value: (2 + Math.random() * 4).toFixed(2) + 's', status: true },
            { label: 'Image Optimization', value: technical.pageSpeed > 60 ? 'Good' : 'Needs Work', status: technical.pageSpeed > 60 }
        ];

        perfItems.forEach(item => {
            perfList.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });
    }

    updateContentList(content) {
        const list = document.getElementById('content-list');
        list.innerHTML = '';

        const items = [
            { label: 'Word Count', value: content.wordCount.toLocaleString(), status: content.wordCount > 800 },
            { label: 'Readability Score', value: content.readability + '/100', status: content.readability > 60 },
            { label: 'Content Uniqueness', value: content.uniqueness + '%', status: content.uniqueness > 70 },
            { label: 'Images Present', value: content.hasImages ? 'Yes' : 'No', status: content.hasImages },
            { label: 'Videos Present', value: content.hasVideos ? 'Yes' : 'No', status: content.hasVideos },
            { label: 'Heading Structure', value: content.headingStructure ? 'Proper' : 'Needs Work', status: content.headingStructure }
        ];

        items.forEach(item => {
            list.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });
    }

    updateRecommendationsList(recommendations) {
        const list = document.getElementById('recommendations-list');
        list.innerHTML = '';

        if (recommendations.length === 0) {
            list.innerHTML = '<div class="detail-item"><span>Your SEO is well optimized! Keep up the good work.</span></div>';
            return;
        }

        recommendations.forEach(rec => {
            const item = document.createElement('div');
            item.className = 'detail-item';
            item.innerHTML = `
                <div style="flex: 1;">
                    <div style="font-weight: 600; margin-bottom: 4px;">${rec.title}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">${rec.description}</div>
                </div>
                <span class="detail-item-value ${rec.type === 'critical' ? 'danger' : rec.type === 'high' ? 'warning' : 'success'}">
                    ${rec.type.toUpperCase()}
                </span>
            `;
            list.appendChild(item);
        });
    }

    createDetailItem(label, value, status) {
        const item = document.createElement('div');
        item.className = 'detail-item';

        const statusClass = status ? 'success' : 'warning';

        item.innerHTML = `
            <span class="detail-item-label">${label}</span>
            <span class="detail-item-value ${statusClass}">${value}</span>
        `;

        return item;
    }

    createKeywordsChart(keywords) {
        const ctx = document.getElementById('keywords-chart');

        if (this.charts.keywords) {
            this.charts.keywords.destroy();
        }

        this.charts.keywords = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: keywords.slice(0, 8).map(k => k.keyword),
                datasets: [{
                    label: 'Keyword Frequency',
                    data: keywords.slice(0, 8).map(k => k.frequency),
                    backgroundColor: 'rgba(0, 242, 255, 0.6)',
                    borderColor: 'rgba(0, 242, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#a0a0b0' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#a0a0b0' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }

    createBacklinksChart(backlinks) {
        const ctx = document.getElementById('backlinks-chart');

        if (this.charts.backlinks) {
            this.charts.backlinks.destroy();
        }

        this.charts.backlinks = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['High Quality', 'Medium Quality', 'Low Quality'],
                datasets: [{
                    data: [
                        backlinks.distribution.high,
                        backlinks.distribution.medium,
                        backlinks.distribution.low
                    ],
                    backgroundColor: [
                        'rgba(0, 255, 136, 0.8)',
                        'rgba(0, 242, 255, 0.8)',
                        'rgba(255, 170, 0, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 136, 1)',
                        'rgba(0, 242, 255, 1)',
                        'rgba(255, 170, 0, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    saveToHistory(url, results) {
        const entry = {
            url: url,
            date: new Date().toISOString(),
            score: results.overall
        };

        this.history.unshift(entry);
        this.history = this.history.slice(0, 10); // Keep only last 10

        localStorage.setItem('seo_history', JSON.stringify(this.history));
        this.renderHistory();
    }

    loadHistory() {
        const stored = localStorage.getItem('seo_history');
        return stored ? JSON.parse(stored) : [];
    }

    renderHistory() {
        const historyList = document.getElementById('history-list');

        if (this.history.length === 0) {
            historyList.innerHTML = '<p class="empty-state">No analysis history yet. Start by analyzing a website!</p>';
            return;
        }

        historyList.innerHTML = '';

        this.history.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';

            const date = new Date(entry.date);
            const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

            let scoreClass = 'success';
            if (entry.score < 60) scoreClass = 'warning';
            if (entry.score < 40) scoreClass = 'danger';

            item.innerHTML = `
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">${entry.url}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">${formattedDate}</div>
                </div>
                <div style="font-size: 24px; font-weight: 700; color: var(--primary-cyan);" class="${scoreClass}">
                    ${entry.score}
                </div>
            `;

            item.addEventListener('click', () => {
                this.urlInput.value = entry.url;
                sections.analyzer.classList.remove('hidden');
                sections.history.classList.add('hidden');
                navBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.section === 'analyzer');
                });
            });

            historyList.appendChild(item);
        });
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    const ui = new UIController();
    ui.init();

    // Add SVG gradient for score circle
    const svg = document.querySelector('.score-svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'scoreGradient');
    gradient.innerHTML = `
        <stop offset="0%" style="stop-color:#00f2ff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#7b2ff7;stop-opacity:1" />
    `;
    defs.appendChild(gradient);
    svg.appendChild(defs);
});

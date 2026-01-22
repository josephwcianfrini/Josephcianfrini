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
            googleBusiness: {},
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
            await this.analyzeGoogleBusiness();
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

    async analyzeGoogleBusiness() {
        await this.delay(700);

        // Simulate Google Business Profile metrics
        const hasGMB = Math.random() > 0.2;
        const profileCompleteness = hasGMB ? 60 + Math.random() * 35 : 20 + Math.random() * 30;

        // Reviews & Ratings
        const reviewCount = hasGMB ? Math.floor(10 + Math.random() * 200) : Math.floor(Math.random() * 10);
        const averageRating = hasGMB ? 3.5 + Math.random() * 1.5 : 0;
        const reviewResponseRate = hasGMB ? Math.random() * 100 : 0;
        const recentReviews = hasGMB && Math.random() > 0.4;

        // Photos & Media
        const photoCount = hasGMB ? Math.floor(5 + Math.random() * 50) : 0;
        const hasLogo = hasGMB && Math.random() > 0.2;
        const hasCoverPhoto = hasGMB && Math.random() > 0.3;
        const photoRecency = hasGMB ? 30 + Math.random() * 335 : 0; // days since last photo

        // Business Information
        const hasBusinessHours = hasGMB && Math.random() > 0.15;
        const hasPhoneNumber = hasGMB && Math.random() > 0.1;
        const hasWebsite = Math.random() > 0.2;
        const hasDescription = hasGMB && Math.random() > 0.25;
        const categoryCount = hasGMB ? Math.floor(1 + Math.random() * 3) : 0;
        const hasAttributes = hasGMB && Math.random() > 0.4;

        // Engagement & Activity
        const postsPerMonth = hasGMB ? Math.floor(Math.random() * 8) : 0;
        const questionsAnswered = hasGMB ? Math.floor(Math.random() * 20) : 0;
        const photoViewsMonthly = hasGMB ? Math.floor(100 + Math.random() * 5000) : 0;
        const searchAppearances = hasGMB ? Math.floor(500 + Math.random() * 10000) : 0;

        // NAP Consistency
        const napConsistency = 60 + Math.random() * 35;
        const citationCount = Math.floor(10 + Math.random() * 100);

        // Calculate scores
        const reviewScore = Math.min(100, (reviewCount / 2) + (averageRating * 15) + (reviewResponseRate * 0.3));
        const photoScore = Math.min(100, (photoCount * 1.5) + (hasLogo ? 15 : 0) + (hasCoverPhoto ? 15 : 0) + (photoRecency < 30 ? 20 : photoRecency < 90 ? 10 : 0));
        const completenessScore = profileCompleteness;
        const engagementScore = Math.min(100, (postsPerMonth * 8) + (questionsAnswered * 2) + (photoViewsMonthly / 100));

        this.results.googleBusiness = {
            hasProfile: hasGMB,
            overallScore: Math.round((reviewScore + photoScore + completenessScore + engagementScore) / 4),

            // Reviews
            reviewCount: reviewCount,
            averageRating: averageRating.toFixed(1),
            reviewResponseRate: Math.round(reviewResponseRate),
            recentReviews: recentReviews,
            reviewScore: Math.round(reviewScore),

            // Photos
            photoCount: photoCount,
            hasLogo: hasLogo,
            hasCoverPhoto: hasCoverPhoto,
            photoRecency: Math.round(photoRecency),
            photoScore: Math.round(photoScore),

            // Business Info
            profileCompleteness: Math.round(profileCompleteness),
            hasBusinessHours: hasBusinessHours,
            hasPhoneNumber: hasPhoneNumber,
            hasWebsite: hasWebsite,
            hasDescription: hasDescription,
            categoryCount: categoryCount,
            hasAttributes: hasAttributes,

            // Engagement
            postsPerMonth: postsPerMonth,
            questionsAnswered: questionsAnswered,
            photoViewsMonthly: photoViewsMonthly,
            searchAppearances: searchAppearances,
            engagementScore: Math.round(engagementScore),

            // Citations
            napConsistency: Math.round(napConsistency),
            citationCount: citationCount
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
        const gbp = this.results.googleBusiness;

        // === GOOGLE BUSINESS PROFILE RECOMMENDATIONS ===

        // Profile Setup
        if (!gbp.hasProfile) {
            recs.push({
                category: 'Google Business Profile',
                type: 'critical',
                title: 'Create Google Business Profile',
                description: 'You don\'t have a Google Business Profile yet',
                impact: 'High',
                difficulty: 'Easy',
                tips: [
                    'Visit google.com/business and create a free profile',
                    'Verify your business using the verification code sent by mail or phone',
                    'Complete all business information including address, phone, hours, and website',
                    'Choose the most relevant primary category for your business',
                    'This is essential for appearing in Google Maps and local search results'
                ]
            });
        }

        // Profile Completeness
        if (gbp.profileCompleteness < 80) {
            const missingElements = [];
            if (!gbp.hasBusinessHours) missingElements.push('business hours');
            if (!gbp.hasPhoneNumber) missingElements.push('phone number');
            if (!gbp.hasWebsite) missingElements.push('website URL');
            if (!gbp.hasDescription) missingElements.push('business description');
            if (!gbp.hasAttributes) missingElements.push('business attributes');

            recs.push({
                category: 'Google Business Profile',
                type: gbp.profileCompleteness < 50 ? 'critical' : 'high',
                title: 'Complete Your Google Business Profile',
                description: `Your profile is only ${gbp.profileCompleteness}% complete`,
                impact: 'High',
                difficulty: 'Easy',
                tips: [
                    'Add missing information: ' + (missingElements.length > 0 ? missingElements.join(', ') : 'review all sections'),
                    'Include accurate business hours, including special hours for holidays',
                    'Write a compelling 750-character business description with relevant keywords',
                    'Add all relevant business attributes (e.g., wheelchair accessible, free Wi-Fi)',
                    'Select up to 10 business categories, with the most relevant as primary',
                    'Complete profiles rank 2.7x higher than incomplete ones'
                ]
            });
        }

        // Reviews & Ratings
        if (gbp.reviewCount < 50) {
            recs.push({
                category: 'Reviews & Reputation',
                type: gbp.reviewCount < 10 ? 'critical' : 'high',
                title: 'Increase Customer Reviews',
                description: `You have only ${gbp.reviewCount} reviews. Aim for 50+ reviews`,
                impact: 'Very High',
                difficulty: 'Medium',
                tips: [
                    'Create a review request strategy: ask happy customers at point of sale',
                    'Send follow-up emails with direct Google review links',
                    'Make it easy: create a short link or QR code to your review page',
                    'Train staff to ask for reviews professionally and consistently',
                    'Display "Review us on Google" signage in your business',
                    'Never incentivize reviews - this violates Google\'s policies',
                    'Businesses with 40+ reviews get 54% more clicks than those with fewer'
                ]
            });
        }

        if (parseFloat(gbp.averageRating) < 4.0 && gbp.reviewCount > 5) {
            recs.push({
                category: 'Reviews & Reputation',
                type: 'high',
                title: 'Improve Your Average Rating',
                description: `Your rating is ${gbp.averageRating} stars. Aim for 4.5+ stars`,
                impact: 'Very High',
                difficulty: 'Medium',
                tips: [
                    'Identify common complaints in negative reviews and address them',
                    'Improve service quality and customer experience systematically',
                    'Focus on getting more positive reviews from satisfied customers',
                    'Respond to negative reviews professionally and offer solutions',
                    'Track feedback patterns and make operational improvements',
                    'A 1-star increase can lead to 5-9% revenue increase'
                ]
            });
        }

        if (gbp.reviewResponseRate < 80 && gbp.reviewCount > 5) {
            recs.push({
                category: 'Reviews & Reputation',
                type: 'high',
                title: 'Respond to More Reviews',
                description: `You're only responding to ${gbp.reviewResponseRate}% of reviews`,
                impact: 'High',
                difficulty: 'Easy',
                tips: [
                    'Respond to ALL reviews, both positive and negative, within 24-48 hours',
                    'Thank customers for positive reviews and mention specific details',
                    'Address negative reviews with empathy and offer to resolve issues offline',
                    'Keep responses professional, personalized, and on-brand',
                    'Use keywords naturally in responses to boost SEO',
                    'Businesses that respond to reviews appear more trustworthy and engaged',
                    'Set up email alerts for new reviews to respond quickly'
                ]
            });
        }

        // Photos & Visual Content
        if (gbp.photoCount < 20) {
            recs.push({
                category: 'Photos & Media',
                type: gbp.photoCount < 5 ? 'critical' : 'high',
                title: 'Add More High-Quality Photos',
                description: `You have only ${gbp.photoCount} photos. Aim for 30+ photos`,
                impact: 'High',
                difficulty: 'Easy',
                tips: [
                    'Upload at least 3 photos per category: exterior, interior, products, team',
                    'Add photos showing your products, services, and happy customers',
                    'Include team photos to humanize your business',
                    'Upload high-resolution images (720px height minimum)',
                    'Keep photos recent - upload new ones monthly',
                    'Add photos of seasonal offerings and special events',
                    'Businesses with 100+ photos get 520% more calls and 2.7x more direction requests',
                    'Use natural lighting and professional composition'
                ]
            });
        }

        if (!gbp.hasLogo) {
            recs.push({
                category: 'Photos & Media',
                type: 'medium',
                title: 'Upload Your Business Logo',
                description: 'A logo helps with brand recognition',
                impact: 'Medium',
                difficulty: 'Easy',
                tips: [
                    'Use a square logo (recommended: 720x720px)',
                    'Ensure the logo is clear and recognizable even at small sizes',
                    'Use PNG format with transparent background if possible',
                    'Your logo appears in search results and Google Maps'
                ]
            });
        }

        if (!gbp.hasCoverPhoto) {
            recs.push({
                category: 'Photos & Media',
                type: 'medium',
                title: 'Add a Cover Photo',
                description: 'Cover photos create a strong first impression',
                impact: 'Medium',
                difficulty: 'Easy',
                tips: [
                    'Use a high-quality, landscape-oriented image (1080x608px recommended)',
                    'Show your business exterior, best products, or team',
                    'Avoid text overlays and promotional content',
                    'Update seasonally to keep your profile fresh'
                ]
            });
        }

        if (gbp.photoRecency > 90) {
            recs.push({
                category: 'Photos & Media',
                type: 'medium',
                title: 'Upload Recent Photos',
                description: `Your last photo was uploaded ${gbp.photoRecency} days ago`,
                impact: 'Medium',
                difficulty: 'Easy',
                tips: [
                    'Upload new photos at least once per month',
                    'Recent photos signal an active, current business',
                    'Show new products, seasonal offerings, or recent events',
                    'Fresh content keeps your profile engaging and relevant'
                ]
            });
        }

        // Posts & Engagement
        if (gbp.postsPerMonth < 4) {
            recs.push({
                category: 'Engagement & Posts',
                type: 'high',
                title: 'Publish Regular Google Posts',
                description: `You're only posting ${gbp.postsPerMonth} times per month`,
                impact: 'High',
                difficulty: 'Medium',
                tips: [
                    'Post at least weekly (4-8 posts per month)',
                    'Share updates, offers, events, and product launches',
                    'Use high-quality images with each post',
                    'Include a clear call-to-action (Learn more, Call now, Book, etc.)',
                    'Posts expire after 7 days, so maintain consistency',
                    'Use posts to highlight special offers and time-sensitive promotions',
                    'Regular posting signals an active business and improves visibility',
                    'Include relevant keywords naturally in post content'
                ]
            });
        }

        if (gbp.questionsAnswered < 5) {
            recs.push({
                category: 'Engagement & Posts',
                type: 'medium',
                title: 'Answer Customer Questions',
                description: 'Responding to Q&A builds trust and provides information',
                impact: 'Medium',
                difficulty: 'Easy',
                tips: [
                    'Monitor the Questions & Answers section weekly',
                    'Respond to all questions promptly and thoroughly',
                    'Proactively add common questions and answers yourself',
                    'Include helpful information like parking, accessibility, policies',
                    'Use keywords naturally in your answers for SEO benefits',
                    'This shows you\'re engaged and helps customers make decisions'
                ]
            });
        }

        // === TECHNICAL SEO RECOMMENDATIONS ===

        if (!this.results.technical.ssl) {
            recs.push({
                category: 'Technical SEO',
                type: 'critical',
                title: 'Enable HTTPS/SSL Certificate',
                description: 'Your site is not secure (no HTTPS)',
                impact: 'Very High',
                difficulty: 'Medium',
                tips: [
                    'Install an SSL certificate from your hosting provider (often free)',
                    'Use Let\'s Encrypt for a free SSL certificate',
                    'Update all internal links to use HTTPS',
                    'Set up 301 redirects from HTTP to HTTPS',
                    'Update Google Business Profile to use HTTPS URL',
                    'HTTPS is a confirmed Google ranking factor'
                ]
            });
        }

        if (this.results.technical.sitemap === 'Not Found') {
            recs.push({
                category: 'Technical SEO',
                type: 'high',
                title: 'Create and Submit XML Sitemap',
                description: 'Missing sitemap makes it harder for Google to index your site',
                impact: 'High',
                difficulty: 'Easy',
                tips: [
                    'Generate an XML sitemap using your CMS or a sitemap generator',
                    'Submit sitemap to Google Search Console',
                    'Include all important pages and update regularly',
                    'List sitemap location in robots.txt file',
                    'This helps search engines discover and index all your pages efficiently'
                ]
            });
        }

        if (this.results.technical.pageSpeed < 70) {
            recs.push({
                category: 'Technical SEO',
                type: 'high',
                title: 'Improve Page Speed',
                description: `Page speed score is ${this.results.technical.pageSpeed}/100`,
                impact: 'High',
                difficulty: 'Hard',
                tips: [
                    'Compress and optimize all images (use WebP format)',
                    'Enable browser caching and GZIP compression',
                    'Minify CSS, JavaScript, and HTML files',
                    'Use a Content Delivery Network (CDN)',
                    'Eliminate render-blocking resources',
                    'Page speed affects both rankings and user experience',
                    'Test with Google PageSpeed Insights and follow recommendations'
                ]
            });
        }

        if (!this.results.technical.mobile) {
            recs.push({
                category: 'Technical SEO',
                type: 'critical',
                title: 'Make Website Mobile-Friendly',
                description: 'Your site is not optimized for mobile devices',
                impact: 'Very High',
                difficulty: 'Hard',
                tips: [
                    'Implement responsive design that adapts to all screen sizes',
                    'Use mobile-first design principles',
                    'Test on multiple devices and screen sizes',
                    'Ensure buttons and links are easily tappable (48x48px minimum)',
                    'Avoid horizontal scrolling and pop-ups on mobile',
                    'Over 60% of searches are now on mobile devices',
                    'Use Google\'s Mobile-Friendly Test tool'
                ]
            });
        }

        // === LOCAL SEO & CITATIONS ===

        if (gbp.napConsistency < 85) {
            recs.push({
                category: 'Local SEO',
                type: 'high',
                title: 'Improve NAP Consistency',
                description: `NAP consistency is ${gbp.napConsistency}%`,
                impact: 'High',
                difficulty: 'Medium',
                tips: [
                    'Ensure Name, Address, Phone are identical everywhere online',
                    'Use the exact same format across all directories and citations',
                    'Fix inconsistencies in major directories (Yelp, Facebook, Yellow Pages)',
                    'Update your website footer with consistent NAP information',
                    'Use schema markup to structure your NAP data',
                    'Inconsistent information confuses Google and hurts local rankings'
                ]
            });
        }

        if (gbp.citationCount < 50) {
            recs.push({
                category: 'Local SEO',
                type: 'medium',
                title: 'Build Local Citations',
                description: `You have ${gbp.citationCount} citations. Aim for 60+ quality citations`,
                impact: 'Medium',
                difficulty: 'Medium',
                tips: [
                    'List your business in industry-specific directories',
                    'Get listed on major platforms: Yelp, Bing Places, Apple Maps',
                    'Add your business to local chamber of commerce websites',
                    'Use citation building services or software to find opportunities',
                    'Focus on quality over quantity - choose authoritative directories',
                    'Ensure all citations have consistent NAP information'
                ]
            });
        }

        // === CONTENT & RELEVANCE ===

        if (this.results.content.wordCount < 800) {
            recs.push({
                category: 'Content Strategy',
                type: 'medium',
                title: 'Increase Content Length',
                description: `Your pages average ${this.results.content.wordCount} words`,
                impact: 'Medium',
                difficulty: 'Medium',
                tips: [
                    'Aim for 1,000-2,000 words on important pages',
                    'Add comprehensive service descriptions and details',
                    'Include FAQ sections addressing common customer questions',
                    'Add case studies, testimonials, and success stories',
                    'Create helpful, informative content that answers user intent',
                    'Longer, quality content tends to rank better in search results'
                ]
            });
        }

        if (!this.results.content.hasImages) {
            recs.push({
                category: 'Content Strategy',
                type: 'medium',
                title: 'Add Images to Your Content',
                description: 'Images improve engagement and time on page',
                impact: 'Medium',
                difficulty: 'Easy',
                tips: [
                    'Add relevant, high-quality images to every page',
                    'Use descriptive alt text with keywords for SEO',
                    'Optimize image file sizes for fast loading',
                    'Include images of your products, services, and team',
                    'Visual content increases engagement and dwell time'
                ]
            });
        }

        if (this.results.relevance.score < 75) {
            recs.push({
                category: 'Content Strategy',
                type: 'medium',
                title: 'Optimize Keyword Relevance',
                description: `Relevance score is ${this.results.relevance.score}/100`,
                impact: 'High',
                difficulty: 'Medium',
                tips: [
                    'Research keywords your customers actually use to find services',
                    'Include location-based keywords (city, neighborhood, "near me")',
                    'Optimize title tags, meta descriptions, and headers',
                    'Use keywords naturally in content - avoid keyword stuffing',
                    'Create dedicated pages for each service you offer',
                    'Match your content to search intent (informational, transactional)',
                    'Use Google Search Console to find keyword opportunities'
                ]
            });
        }

        // === AUTHORITY & BACKLINKS ===

        if (this.results.authority.score < 60) {
            recs.push({
                category: 'Authority Building',
                type: 'high',
                title: 'Build Domain Authority',
                description: `Domain authority is ${this.results.authority.domainAuthority}`,
                impact: 'High',
                difficulty: 'Hard',
                tips: [
                    'Earn high-quality backlinks from authoritative websites',
                    'Create link-worthy content (guides, infographics, research)',
                    'Guest post on industry blogs and publications',
                    'Get mentioned in local news and community websites',
                    'Build relationships with complementary businesses for link exchanges',
                    'Sponsor local events and organizations for backlinks',
                    'Quality over quantity - one authoritative link beats 100 low-quality links'
                ]
            });
        }

        if (this.results.backlinks.quality < 70) {
            recs.push({
                category: 'Authority Building',
                type: 'medium',
                title: 'Improve Backlink Quality',
                description: `Backlink quality score is ${this.results.backlinks.quality}/100`,
                impact: 'Medium',
                difficulty: 'Hard',
                tips: [
                    'Audit your backlink profile and disavow spammy links',
                    'Focus on earning links from industry-relevant websites',
                    'Target websites with high domain authority (50+)',
                    'Avoid link schemes, paid links, and link farms',
                    'Create valuable resources that naturally attract links',
                    'Monitor your backlink profile monthly using tools like Ahrefs or Moz'
                ]
            });
        }

        // Sort recommendations by priority
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        recs.sort((a, b) => priorityOrder[a.type] - priorityOrder[b.type]);

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
        document.getElementById('gmb-score').textContent = results.googleBusiness.overallScore;
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

        // Update Google Business metrics
        document.getElementById('profile-complete').textContent = results.googleBusiness.profileCompleteness + '%';
        document.getElementById('review-count').textContent = results.googleBusiness.reviewCount;
        document.getElementById('avg-rating').textContent = results.googleBusiness.averageRating + ' ⭐';

        // Update proximity metrics
        document.getElementById('local-seo').textContent = results.proximity.localSEO + '%';
        document.getElementById('nap-consistency').textContent = results.proximity.napConsistency + '%';
        document.getElementById('gmb-status').textContent = results.proximity.gmbStatus + '%';

        // Update technical metrics
        document.getElementById('meta-tags').textContent = results.technical.metaTags + '%';
        document.getElementById('sitemap').textContent = results.technical.sitemap;
        document.getElementById('page-speed').textContent = results.technical.pageSpeed + '/100';

        // Update detailed tabs
        this.updateRecommendationsList(results.recommendations);
        this.updateGoogleBusinessLists(results.googleBusiness);
        this.updateMetaTagsList(results.technical);
        this.updateKeywordsList(results.keywords);
        this.updateBacklinksData(results.backlinks);
        this.updateTechnicalList(results.technical);
        this.updateContentList(results.content);

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

    updateGoogleBusinessLists(gbp) {
        // Profile Status
        const profileList = document.getElementById('gbp-profile-list');
        profileList.innerHTML = '';

        const profileItems = [
            { label: 'Google Business Profile', value: gbp.hasProfile ? 'Active' : 'Not Found', status: gbp.hasProfile },
            { label: 'Profile Completeness', value: gbp.profileCompleteness + '%', status: gbp.profileCompleteness > 80 },
            { label: 'Business Hours', value: gbp.hasBusinessHours ? 'Added' : 'Missing', status: gbp.hasBusinessHours },
            { label: 'Phone Number', value: gbp.hasPhoneNumber ? 'Added' : 'Missing', status: gbp.hasPhoneNumber },
            { label: 'Website URL', value: gbp.hasWebsite ? 'Added' : 'Missing', status: gbp.hasWebsite },
            { label: 'Business Description', value: gbp.hasDescription ? 'Added' : 'Missing', status: gbp.hasDescription },
            { label: 'Business Categories', value: gbp.categoryCount + ' categories', status: gbp.categoryCount > 0 },
            { label: 'Business Attributes', value: gbp.hasAttributes ? 'Added' : 'Missing', status: gbp.hasAttributes }
        ];

        profileItems.forEach(item => {
            profileList.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });

        // Reviews & Ratings
        const reviewsList = document.getElementById('gbp-reviews-list');
        reviewsList.innerHTML = '';

        const reviewItems = [
            { label: 'Total Reviews', value: gbp.reviewCount, status: gbp.reviewCount > 20 },
            { label: 'Average Rating', value: gbp.averageRating + ' ⭐', status: parseFloat(gbp.averageRating) >= 4.0 },
            { label: 'Review Response Rate', value: gbp.reviewResponseRate + '%', status: gbp.reviewResponseRate > 80 },
            { label: 'Recent Reviews (30d)', value: gbp.recentReviews ? 'Yes' : 'No', status: gbp.recentReviews },
            { label: 'Review Score', value: gbp.reviewScore + '/100', status: gbp.reviewScore > 70 }
        ];

        reviewItems.forEach(item => {
            reviewsList.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });

        // Photos & Media
        const photosList = document.getElementById('gbp-photos-list');
        photosList.innerHTML = '';

        const photoItems = [
            { label: 'Total Photos', value: gbp.photoCount, status: gbp.photoCount > 15 },
            { label: 'Business Logo', value: gbp.hasLogo ? 'Added' : 'Missing', status: gbp.hasLogo },
            { label: 'Cover Photo', value: gbp.hasCoverPhoto ? 'Added' : 'Missing', status: gbp.hasCoverPhoto },
            { label: 'Last Photo Upload', value: gbp.photoRecency + ' days ago', status: gbp.photoRecency < 90 },
            { label: 'Photo Score', value: gbp.photoScore + '/100', status: gbp.photoScore > 70 },
            { label: 'Monthly Photo Views', value: gbp.photoViewsMonthly.toLocaleString(), status: gbp.photoViewsMonthly > 500 }
        ];

        photoItems.forEach(item => {
            photosList.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });

        // Engagement
        const engagementList = document.getElementById('gbp-engagement-list');
        engagementList.innerHTML = '';

        const engagementItems = [
            { label: 'Posts Per Month', value: gbp.postsPerMonth, status: gbp.postsPerMonth >= 4 },
            { label: 'Questions Answered', value: gbp.questionsAnswered, status: gbp.questionsAnswered > 5 },
            { label: 'Monthly Searches', value: gbp.searchAppearances.toLocaleString(), status: gbp.searchAppearances > 1000 },
            { label: 'Engagement Score', value: gbp.engagementScore + '/100', status: gbp.engagementScore > 60 },
            { label: 'NAP Consistency', value: gbp.napConsistency + '%', status: gbp.napConsistency > 85 },
            { label: 'Citation Count', value: gbp.citationCount, status: gbp.citationCount > 40 }
        ];

        engagementItems.forEach(item => {
            engagementList.appendChild(this.createDetailItem(item.label, item.value, item.status));
        });
    }

    updateRecommendationsList(recommendations) {
        const list = document.getElementById('recommendations-list');
        list.innerHTML = '';

        if (recommendations.length === 0) {
            list.innerHTML = '<div class="recommendation-success"><h4>🎉 Excellent Work!</h4><p>Your business profile is well optimized! Keep maintaining your current practices and continue engaging with customers.</p></div>';
            return;
        }

        recommendations.forEach((rec, index) => {
            const item = document.createElement('div');
            item.className = `recommendation-card ${rec.type}`;

            const priorityColors = {
                critical: '#ff3366',
                high: '#ffaa00',
                medium: '#00f2ff',
                low: '#00ff88'
            };

            const difficultyIcons = {
                'Easy': '⚡',
                'Medium': '⚙️',
                'Hard': '🔥'
            };

            const impactIcons = {
                'Very High': '🚀',
                'High': '📈',
                'Medium': '💡',
                'Low': '📊'
            };

            item.innerHTML = `
                <div class="recommendation-header">
                    <div class="recommendation-category">${rec.category || 'General'}</div>
                    <div class="recommendation-priority ${rec.type}">
                        <span class="priority-dot"></span>
                        ${rec.type.toUpperCase()} PRIORITY
                    </div>
                </div>
                <div class="recommendation-title">
                    <h4>${rec.title}</h4>
                    <div class="recommendation-badges">
                        <span class="badge badge-impact" title="Impact on Rankings">
                            ${impactIcons[rec.impact] || '💡'} ${rec.impact} Impact
                        </span>
                        <span class="badge badge-difficulty" title="Implementation Difficulty">
                            ${difficultyIcons[rec.difficulty] || '⚙️'} ${rec.difficulty}
                        </span>
                    </div>
                </div>
                <div class="recommendation-description">
                    ${rec.description}
                </div>
                <div class="recommendation-tips ${index === 0 ? 'expanded' : ''}">
                    <button class="tips-toggle" onclick="this.parentElement.classList.toggle('expanded')">
                        <svg class="tips-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <span class="tips-toggle-text">Show Action Plan (${rec.tips ? rec.tips.length : 0} steps)</span>
                    </button>
                    <ul class="tips-list">
                        ${rec.tips ? rec.tips.map(tip => `<li>${tip}</li>`).join('') : ''}
                    </ul>
                </div>
            `;
            list.appendChild(item);
        });

        // Add summary at the top
        const summary = document.createElement('div');
        summary.className = 'recommendations-summary';
        const criticalCount = recommendations.filter(r => r.type === 'critical').length;
        const highCount = recommendations.filter(r => r.type === 'high').length;
        const mediumCount = recommendations.filter(r => r.type === 'medium').length;

        summary.innerHTML = `
            <h3>📋 Your Personalized Action Plan</h3>
            <p>We've identified ${recommendations.length} optimization opportunities for your business:</p>
            <div class="summary-stats">
                ${criticalCount > 0 ? `<div class="summary-stat critical"><span class="stat-number">${criticalCount}</span> Critical</div>` : ''}
                ${highCount > 0 ? `<div class="summary-stat high"><span class="stat-number">${highCount}</span> High Priority</div>` : ''}
                ${mediumCount > 0 ? `<div class="summary-stat medium"><span class="stat-number">${mediumCount}</span> Medium Priority</div>` : ''}
            </div>
            <p class="summary-advice">Start with critical items first for maximum impact on your Google Business rankings.</p>
        `;
        list.insertBefore(summary, list.firstChild);
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

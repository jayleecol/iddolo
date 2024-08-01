function getBetterPerformingAd(firstAd, secondAd, campaignId, adGroupId) {
    // Assuming firstAd and secondAd contain performance metrics
    // For example: { clicks: 100, impressions: 1000, conversions: 10 }
    
    const firstAdPerformance = calculatePerformanceScore(firstAd);
    const secondAdPerformance = calculatePerformanceScore(secondAd);

    if (firstAdPerformance > secondAdPerformance) {
        return firstAd;
    } else {
        return secondAd;
    }
}

function calculatePerformanceScore(ad) {
    // Example performance calculation (you can adjust as needed)
    const ctr = ad.clicks / ad.impressions; // Click-through rate
    const conversionRate = ad.conversions / ad.clicks; // Conversion rate
    
    // Simple scoring mechanism
    return ctr * conversionRate;
}

const firstAd = { clicks: 150, impressions: 2000, conversions: 15 };
const secondAd = { clicks: 180, impressions: 2200, conversions: 18 };

console.log(getBetterPerformingAd(firstAd, secondAd, 'campaign1', 'adgroup1'));  // Example usage

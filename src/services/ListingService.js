const { default: axios } = require("axios");
// Updated payload with cache control headers
const payloadWithCache = { 
    headers: { 
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SITE_TOKEN}`,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    } 
};
exports.PromoBannerService = async ({slug}) => {
    try {
        const apiPath = `${process.env.NEXT_PUBLIC_MODE_BASE_API}get-slider/${slug}`;
        const resp = await axios.get(apiPath, payloadWithCache);
        return resp.data;
    } catch (err) {
        return null;
    }
};
exports.LatestArticleService = async ({ pageNo = 0, limit = 10, }) => {
    try {
        const apiPath = `${process.env.NEXT_PUBLIC_MODE_BASE_API}get-article/${pageNo}/${limit}`;        
        const resp = await axios.get(apiPath, payloadWithCache);
        return resp.data;
    } catch (err) {
        return null;
    }
};
exports.SubCategoryListingService = async ({ category, subcategory, pageNo = 1, limit = 18, }) => {
    try {
        const apiPath = `${process.env.NEXT_PUBLIC_MODE_BASE_API}get-article-by-subcategory/${category}/${subcategory}/${pageNo}/${limit}`;        
        const resp = await axios.get(apiPath, payloadWithCache);
        return resp.data;
    } catch (err) {
        return null;
    }
};
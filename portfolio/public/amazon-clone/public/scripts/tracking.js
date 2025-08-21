import {loadProductsFetch} from '../data/products.js';
import {displaySummary,greenProgress} from './tracking/tracking.js';
import {UserVeryficationToken} from './utils/fetch.js';
loadPage()
async function loadPage(){
    const [_, l] = await Promise.all([
        loadProductsFetch(),
        UserVeryficationToken()
    ]);
    

    displaySummary(l);
    greenProgress();

    
}


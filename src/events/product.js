import BcEvents from './bc-events';
import _ from 'lodash';

export class ProductEvents extends BcEvents {

    /**
     *
     * @param {object} options
     */
    constructor(options){
        this.options = options || {};
        this.dataMap = {
            '[data-product-add]': 'product-item-add',
            '[data-product-remove]': 'product-item-remove'
        }
    }
}

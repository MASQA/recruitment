import { WebCollection } from "../lib/componentCollection";
import { WebComponent } from "../lib/components";
import { findByCollection, findByInComponent } from "../lib/utils";

export class Option extends WebComponent{
    @findByInComponent('path[fill="#00b24d"]')
    public CheckMarkIco: WebComponent;

    @findByInComponent('path[fill-opacity]')
    public CrossIco: WebComponent;

    public async hasClass(className: string){
        const cssClassElement = await this.getAttribute('class');
        console.log('class')
        console.log(cssClassElement)
        if (cssClassElement.indexOf(className) > -1){
            return true;
        } else { return false};
    };


}
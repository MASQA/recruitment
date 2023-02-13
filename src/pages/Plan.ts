import { WebCollection } from "../lib/componentCollection";
import { WebComponent } from "../lib/components";
import { findByCollection, findByInComponent } from "../lib/utils";
import { Option } from "./Option";
import { step } from "allure-decorators";

export class Plan extends WebComponent{
    @findByInComponent('.pricing-package-name.tac')
    public titlePlan: WebComponent;


    @findByInComponent('p')
    private options: WebCollection<Option>;

    public async returnTotalOptions() {
        const totalPlans = await this.options.getItemCount();
        return totalPlans;
    }

    public returnOption(num: number): Option {
        return this.options.getItem(Option, num) as Option;
    }

    @step(name =>`Возарщаем опцию плана под именем ${name}`)
    public async returnOptionByName(name: string) {
        const totalPlans = await this.returnTotalOptions();
        let i;
        for (i = 1; i <= totalPlans; i++) {
            try
            {
                const isOption = await this.returnOption(i).hasClass('df gap1 aic jcl mb0')
                if (!isOption){
                    continue;
                }
                const nameOption = await this.returnOption(i).getText();
                console.log('nameOption');
                console.log(nameOption);
                if (nameOption === name) {
                    break;
                }
            } catch(err){}
        }
        return this.returnOption(i);
    }
}
import { findByCollection } from "../lib";
import { WebCollection } from "../lib/componentCollection";
import { WebComponent } from "../lib";
import { Plan } from "../pages/Plan";
import { step } from 'allure-decorators'

export class RowPlans extends WebComponent {

    @findByCollection('.princing-section .row .col-md-3')
    private plans: WebCollection<Plan>;
    
    public async returnTotalPlans() {
        const totalPlans = await this.plans.getItemCount();
        return totalPlans;
    }

    public returnPlan(num: number): Plan {
        return this.plans.getItem(Plan, num) as Plan;
    }

    @step(name =>`Возарщаем плашку плана с именем ${name}`)
    public async returnPlanByName(name: string) {
        const totalPlans = await this.returnTotalPlans();
        let i;
        for (i = 1; i <= totalPlans; i++) {
            const namePlan = await this.returnPlan(i).titlePlan.getText();
            
            if (namePlan === name) {
                break;
            }
        }
        return this.returnPlan(i) as Plan;
    }
}
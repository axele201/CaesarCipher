import Jumbotron from "../screens/branda/Jumbotron"
import Pricing from "../screens/branda/Pricing"
import Feature from "../screens/branda/Feature"
import FAQs from "../screens/branda/FAQs"

export default function BrandaPages(){
    return `
    ${Jumbotron()}
    ${Pricing()}
    ${Feature()}
    ${FAQs()}
    `
}
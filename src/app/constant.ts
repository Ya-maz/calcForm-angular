
interface tariff
{
    distancePrice: number,
    baggagePrice?: number,
    baggagePricePerOne?: number
    conditionBaggage?: number,
    conditionBaggageOutLimit: number,
    conditionWithChildAge?: number,
    withChildPrice?: number,
}

export namespace priceAero {
    export const cheap: tariff = {
        distancePrice: 4,
        baggagePrice: 4000,
        conditionBaggage: 5,
        conditionBaggageOutLimit: 20
    }
    export const middle: tariff = {
        distancePrice: 8,
        baggagePrice: 5000,
        conditionBaggage: 20,
        conditionBaggageOutLimit: 50,
        conditionWithChildAge: 7,
        withChildPrice: .7,
    }

    export const lux: tariff = {
        distancePrice: 15,
        conditionBaggageOutLimit: 50,
        conditionWithChildAge: 16,
        withChildPrice: .7,
    }

}

export namespace priceRJd {
    export const cheap: tariff = {
        distancePrice: .5,
        baggagePricePerOne: 50,
        conditionBaggage: 15,
        conditionBaggageOutLimit: 50,
        conditionWithChildAge: 5,
        withChildPrice: .5,
    }
    export const middle: tariff = {
        distancePrice: 2,
        baggagePricePerOne: 50,
        conditionBaggage: 20,
        conditionBaggageOutLimit: 60,
        conditionWithChildAge: 8,
        withChildPrice: .3,
    }

    export const lux: tariff = {
        distancePrice: 4,
        conditionBaggageOutLimit: 60,
        conditionWithChildAge: 16,
        withChildPrice: .8,
    }
}

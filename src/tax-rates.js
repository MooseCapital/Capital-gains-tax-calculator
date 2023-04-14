let tax = (function () {
            function single_ShortTermGainsTax(grossIncome, stateTaxRate) {
                const standardDeduction = 12950;
                let AGI = grossIncome - standardDeduction;
                // let lowstateTaxRate = 0.02;
                // let stateTaxRate = 0.05;

                if (AGI < 9950) {
                    if (AGI < 0) {
                        return null;
                    }
                    return (AGI * 0.10) + (AGI * stateTaxRate);
                } else if ( AGI < 40525) {
                    return (9950 * 0.10) + ((AGI - 9950) * 0.12) + (AGI * stateTaxRate);
                } else if (AGI < 86375) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((AGI - 40525) * 0.22) + (AGI * stateTaxRate);
                } else if ( AGI < 164925) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) + ((AGI - 86375) * 0.24) +
                        (AGI * stateTaxRate);
                } else if ( AGI < 209425) {
                    if (AGI < 200000) {
                        return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                            ((164925 - 86375) * 0.24) + ((AGI - 164925) * 0.32) + (AGI * stateTaxRate);
                    } else {
                        return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                            ((164925 - 86375) * 0.24) + ((AGI - 164925) * 0.32) + ((AGI - 200000) * 0.038) + (AGI * stateTaxRate);
                    }
                } else if (AGI < 523600) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                        ((164925 - 86375) * 0.24) + ((209425 - 164925) * 0.32) + ((AGI - 209425) * 0.35) + ((AGI - 200000) * 0.038) + (AGI * stateTaxRate);

                } else if (AGI > 523600) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                        ((164925 - 86375) * 0.24) + ((209425 - 164925) * 0.32) + ((523600 - 209425) * 0.35) +
                        ((AGI - 523600) * 0.37) + ((AGI - 200000) * 0.038) + (AGI * stateTaxRate);
                }

            }
            function single_LongTermGainsTax(grossIncome, stateTaxRate) {
                const standardDeduction = 12950;
                let AGI = grossIncome - standardDeduction;


                if (AGI < 40000) {
                    if (AGI < 0) {
                        return null; //AGI
                    } else if ( AGI < 20000) {
                        return (AGI * stateTaxRate)
                    } else {
                        return (AGI * stateTaxRate)
                    }

                } else if (AGI < 441450) {
                    if (AGI < 200000) {
                        return ((AGI - 40000) * 0.15) + (AGI * stateTaxRate);
                    } else {
                        return ((AGI - 40000) * 0.15) + ((AGI - 200000) * 0.038) + (AGI * stateTaxRate);
                    }

                } else {
                    return ((441450 - 40000) * 0.15) + ((AGI - 441450) * 0.20) + ((AGI - 200000) * 0.038) + (AGI * stateTaxRate);
                }
            }

            function getShortTermTaxInfo(grossIncome, stateTaxRate) {
                let taxPaid = Math.round(single_ShortTermGainsTax(grossIncome, stateTaxRate)) === 0 ?
                null: Math.round(single_ShortTermGainsTax(grossIncome, stateTaxRate));

                let taxRate = Math.round(isNaN((taxPaid / grossIncome) * 100) ? 0 : (taxPaid / grossIncome) * 100) === 0 ?
                null: Math.round(isNaN((taxPaid / grossIncome) * 100) ? 0 : (taxPaid / grossIncome) * 100);


                return {
                taxPaid, taxRate, grossIncome
                }
            }

            function getLongTermTaxInfo(grossIncome, stateTaxRate) {
                let taxPaid = Math.round(single_LongTermGainsTax(grossIncome, stateTaxRate)) === 0 ?
                null: Math.round(single_ShortTermGainsTax(grossIncome, stateTaxRate))
                let taxRate = Math.round(isNaN((taxPaid / grossIncome) * 100) ? 0 : (taxPaid / grossIncome) * 100);


                return {
                    taxPaid, taxRate, grossIncome
                }
            }

        return {
        getShortTermTaxInfo, getLongTermTaxInfo
        }
})()
export default tax;
let tax = (function () {
            function single_ShortTermGainsTax(grossIncome, stateTaxRate) {
                const standardDeduction = 12950;
                let AGI = grossIncome - standardDeduction;
                let lowStateTax = 0.02;
                let stateTax = 0.05;

                if (AGI < 9950) {
                    if (AGI < 0) {
                        return null;
                    }
                    return (AGI * 0.10) + (AGI * stateTax);
                } else if ( AGI < 40525) {
                    return (9950 * 0.10) + ((AGI - 9950) * 0.12) + (AGI * stateTax);
                } else if (AGI < 86375) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((AGI - 40525) * 0.22) + (AGI * stateTax);
                } else if ( AGI < 164925) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) + ((AGI - 86375) * 0.24) +
                        (AGI * stateTax);
                } else if ( AGI < 209425) {
                    if (AGI < 200000) {
                        return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                            ((164925 - 86375) * 0.24) + ((AGI - 164925) * 0.32) + (AGI * stateTax);
                    } else {
                        return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                            ((164925 - 86375) * 0.24) + ((AGI - 164925) * 0.32) + ((AGI - 200000) * 0.038) + (AGI * stateTax);
                    }
                } else if (AGI < 523600) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                        ((164925 - 86375) * 0.24) + ((209425 - 164925) * 0.32) + ((AGI - 209425) * 0.35) + ((AGI - 200000) * 0.038) + (AGI * stateTax);

                } else if (AGI > 523600) {
                    return (9950 * 0.10) + ((40525 - 9950) * 0.12) + ((86375 - 40525) * 0.22) +
                        ((164925 - 86375) * 0.24) + ((209425 - 164925) * 0.32) + ((523600 - 209425) * 0.35) +
                        ((AGI - 523600) * 0.37) + ((AGI - 200000) * 0.038) + (AGI * stateTax);
                }

            }
            function single_LongTermGainsTax(grossIncome) {
                const standardDeduction = 12950;
                let AGI = grossIncome - standardDeduction;
                let lowStateTax = 0.02;
                let stateTax = 0.05;

                if (AGI < 40000) {
                    if (AGI < 0) {
                        return null; //AGI
                    } else if ( AGI < 20000) {
                        return (AGI * lowStateTax)
                    } else {
                        return (AGI * stateTax)
                    }

                } else if (AGI < 441450) {
                    if (AGI < 200000) {
                        return ((AGI - 40000) * 0.15) + (AGI * stateTax);
                    } else {
                        return ((AGI - 40000) * 0.15) + ((AGI - 200000) * 0.038) + (AGI * stateTax);
                    }

                } else {
                    return ((441450 - 40000) * 0.15) + ((AGI - 441450) * 0.20) + ((AGI - 200000) * 0.038) + (AGI * stateTax);
                }
            }

            function getShortTermTaxInfo(grossIncome) {
                let taxPaid = Math.round(single_ShortTermGainsTax(grossIncome)) === 0 ?
                null: Math.round(single_ShortTermGainsTax(grossIncome));

                let taxRate = Math.round(isNaN((taxPaid / grossIncome) * 100) ? 0 : (taxPaid / grossIncome) * 100) === 0 ?
                null: Math.round(isNaN((taxPaid / grossIncome) * 100) ? 0 : (taxPaid / grossIncome) * 100);


                return {
                taxPaid, taxRate
                }
            }

            function getLongTermTaxInfo(grossIncome) {
                let taxPaid = Math.round(single_ShortTermGainsTax(grossIncome));
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
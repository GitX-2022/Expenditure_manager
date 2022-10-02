let ExpenseController = (() => {
    let total = 0, savings = 0, utilities=0, entertainment=0,medical=0,transport=0,other=0, investments = 0;

    return {
        inputEntry(userInput) {
            if (userInput['expenseCategory'] === 'savings') {
                savings += userInput['value'];
                total += userInput['value'];
            }
            if (userInput['expenseCategory'] === 'utilities') {
                investments += userInput['value'];
                total -= userInput['value'];
            }
            if (userInput['expenseCategory'] === 'entertainment') {
                investments += userInput['value'];
                total -= userInput['value'];
            }
            if (userInput['expenseCategory'] === 'medical') {
                investments += userInput['value'];
                total -= userInput['value'];
            }
            if (userInput['expenseCategory'] === 'transport') {
                investments += userInput['value'];
                total -= userInput['value'];
            }
            if (userInput['expenseCategory'] === 'investment') {
                investments += userInput['value'];
                total -= userInput['value'];
            }
            if (userInput['expenseCategory'] === 'other') {
                expenses += userInput['value'];
                total -= userInput['value'];
            }
        },

        getSavingsData() {
            return savings;
        },
        getUtilitiesData() {
            return utilities;
        },
        getEntertainmentData() {
            return savings;
        },
        getMedicalData() {
            return medical;
        },
        getTransportData() {
            return transport;
        },

        getOtherData() {
            return other;
        },

        getInvestmentData() {
            return investments;
        },

        getTotalData() {
            return total;
        }
    }

})();

let UIController = (() => {
    let expenseCategory = 'savings';

    let HTMLStrings = {
        inExpenseDescription: '.input-expense-description',
        inExpenseValue: '.input-expense-value',
        btnSubmitExpense: '.btn-submit-expense',
        expenseList: '.expense-list',
        currentMonth: '#current-month',
        typeExpense: '#type-expense',
        typeSavings: '#type-savings',
        typeInvestment: '#type-investment',
        trackingText: '.tracking-text',
        expenseChart: '#expense-chart',
        monthBudget: '#month-budget'
    };

    return {
        numberFormat(number) {
            return Intl.NumberFormat('en-IN').format(number);
        },
        showCurrentMonth() {
            let now, month, year, months;

            now = new Date();
            month = now.getMonth();
            year = now.getFullYear();
            months = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                'November', 'December'
            ];
            document.querySelector(HTMLStrings.currentMonth).textContent = months[month] + " " + year;
        },

        getHTMLStrings() {
            return HTMLStrings;
        },

        setExpenseCategory(type) {
            console.log('here', type);
            this.expenseCategory = type;
            let emoji ="💰";
            if (type === 'savings') {
                emoji ="💰";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
                }
            }

            if (type === 'utilities') {
                emoji = "🧾";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }
            if (type === 'medical') {
                emoji = "🧾";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }
            if (type === 'entertainment') {
                emoji = "🧾";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }
            if (type === 'transport') {
                emoji = "🧾";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }
            if (type === 'othes') {
                emoji = "🧾";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
                }
            }
            if (type === 'investment') {
                emoji = "🏠";
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
                }
                if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
                }
                if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
                    document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-warning');
                }
            }

            document.querySelector(HTMLStrings.trackingText).textContent = "Tracking " + type + " " + emoji;

        },

        getUserExpenseInput() {
            return {
                description: document.querySelector(HTMLStrings.inExpenseDescription).value,
                value: parseInt(document.querySelector(HTMLStrings.inExpenseValue).value),
                date: Date(document.querySelector(HTMLStrings.inExpenseDate).value).toLocaleDateString(),
                expenseCategory: this.expenseCategory ? this.expenseCategory : 'savings'
            }
        },

        addListItem (inputObj) {
            let html, element;
            element = HTMLStrings.expenseList;

            if (inputObj['expenseCategory'] === 'savings') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-saving fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            } else if (inputObj['expenseCategory'] === 'utilities') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }
            else if (inputObj['expenseCategory'] === 'medical') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }
            else if (inputObj['expenseCategory'] === 'entertainment') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }
            else if (inputObj['expenseCategory'] === 'transport') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }
            else if (inputObj['expenseCategory'] === 'others') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }
            
            else if (inputObj['expenseCategory'] === 'investment') {
                html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-investment fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
            }

            // Add the new element
            document.querySelector(element).insertAdjacentHTML('beforeend', html);

            // Clear the input fields after adding element
            document.querySelector(HTMLStrings.inExpenseValue).value = "";
            document.querySelector(HTMLStrings.inExpenseDescription).value = "";
        },

        updateOverallTotal(totalValue) {
            document.querySelector(HTMLStrings.monthBudget).textContent  = "₹ " + this.numberFormat(totalValue);

            if (totalValue > 0) {
                if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-cost')) {
                    document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-cost');
                }
                document.querySelector(HTMLStrings.monthBudget).classList.add('expense-saving');
            } else {
                if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-saving')) {
                    document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-saving');
                }
                document.querySelector(HTMLStrings.monthBudget).classList.add('expense-cost');
            }
        },

        displayChart(savings = 0, expenses = 0, investments = 0) {
            let ctx = document.querySelector(HTMLStrings.expenseChart);
            let expenseChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Savings', 'Utilities','Entertainment','Medical','Transport','Others', 'Investments'],
                    datasets: [{
                        data: [savings, utilities, entertainment, medical, transport, others , investments],
                        backgroundColor: [
                            'rgba(32, 137, 56, 1)',
                            'rgba(255, 84, 98, 1)',
                            'rgba(153, 0, 76, 1)',
                            'rgba(153, 0, 153, 1)',
                            'rgba(76, 0, 153, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 0.5
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    }
                }
            });
        }
    }
})();

((UIController, ExpenseController) => {

    let HTMLStrings = UIController.getHTMLStrings();
    let setupEventListeners = () => {
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeUtilities).addEventListener('click', () => {
            setExpenseCategory('utilities')
        });
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeEntertainment).addEventListener('click', () => {
            setExpenseCategory('entertainment')
        });
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeMedical).addEventListener('click', () => {
            setExpenseCategory('medical')
        });
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeTransport).addEventListener('click', () => {
            setExpenseCategory('transport')
        });
        document.querySelector(HTMLStrings.btnSubmitExpense).addEventListener('click', addExpense);
        document.querySelector(HTMLStrings.typeOhter).addEventListener('click', () => {
            setExpenseCategory('other')
        });
        document.querySelector(HTMLStrings.typeInvestment).addEventListener('click', () => {
            setExpenseCategory('investment')
        });
        document.querySelector(HTMLStrings.typeSavings).addEventListener('click', () => {
            setExpenseCategory('savings')
        });
    };

    let setExpenseCategory = (type) => {
        UIController.setExpenseCategory(type);
    }

    let addExpense = () => {
        let input = UIController.getUserExpenseInput();
        console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            console.log('Adding item');
            UIController.addListItem(input);
            ExpenseController.inputEntry(input);
            UIController.updateOverallTotal(ExpenseController.getTotalData());
            UIController.displayChart(ExpenseController.getSavingsData(), ExpenseController.getExpensesData(),
                ExpenseController.getInvestmentData());
        }
    }

    let init = () => {
        console.log('Initializing...');
        setupEventListeners();
        UIController.showCurrentMonth();
    }

    init();

})(UIController, ExpenseController);

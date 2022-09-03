//setting DOM
let operations = document.getElementById('operations');
let accountType = document.getElementsByName("accountType");
let amount = document.getElementById('amount');
let accountNo = document.getElementById('accountNo');
let BankOption = document.getElementById('BankOption');
let passwordNo = document.getElementById('passwordNo');
let btn = document.getElementById('btn');
let mess = document.getElementById('mess');
let errorSelect = document.getElementById('errorSelect');
let SAEmess = document.getElementById('SAEmess')
let eAmount = document.getElementById('eAmount')
let eAccNo = document.getElementById('eAccNo')
let eBankOption = document.getElementById('eBankOption')
let ePasswordNo = document.getElementById('ePasswordNo')
let bankOptionDis= document.getElementById('bankOptionDis')
let accountNoDis=document.getElementById("accountNoDis")

operations.addEventListener('change', ()=>{
    switch (operations.value) {
        case 'airtime':
            bankOptionDis.style.display='none'
            accountNoDis.innerHTML='Phone Number'
            break;
    
        default:
            bankOptionDis.style.display='initial'
            accountNoDis.innerHTML='Enter Account Number:'
            break;
    }
})

    btn.addEventListener('click', () => {
    validateForm();
})


function validateForm() {
    if (operations.value == "") {
        errorSelect.innerHTML = 'field is required'
    } else {
        errorSelect.innerHTML = ""
    }
    if (accountType[0].checked == '' && accountType[1].checked == '') {
        SAEmess.innerHTML = 'field is required'
    } else {
        SAEmess.innerHTML = ''
    }
    if (amount.value == '') {
        eAmount.innerHTML = 'field is required'
    } else {
        eAmount.innerHTML = ''
    }
    if (accountNo.value == '') {
        eAccNo.innerHTML = 'field is required'
    } else {
        eAccNo.innerHTML = ''
    }
    if (BankOption.value == '') {
        eBankOption.innerHTML = 'field is required'
    } else {
        eBankOption.innerHTML = ''
    }
    if (passwordNo.value == '') {
        ePasswordNo.innerHTML = 'field is required'
    } else {
        ePasswordNo.innerHTML = ''
    }
    if (operations.value != "" && accountType.checked != "" && amount.value != "" && accountNo.value != "" && eBankOption != "" && ePasswordNo != "") {
        selectOption();
    }
}

function selectOption() {
    switch (operations.value) {
        case 'checkBalance':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'transfer':
            selectAccount();
            break;
        case 'airtime':
            airtimeOrder();
            break;
        case 'otherServices':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'accessMoney':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'xtra':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'xtraCash':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'mobileWallet':
            errorSelect.innerHTML = 'coming soon'
            break;
        case 'fastPay':
            errorSelect.innerHTML = 'coming soon'
            break;
        default:
            errorSelect.innerHTML = 'select right option'
            break;
    }

}

function selectAccount() {
    if (accountType[0].checked == true || accountType[1].checked == true) {
        amountTrf();
    } else {
        SAEmess.innerHTML = 'select one option'
    }
}
function amountTrf() {
    if (amount.value <= 20000) {
        accountNoTrf();
    } else {
        eAccNo.innerHTML = 'Invalid amount'
    }
}
function accountNoTrf() {
    if (accountNo != "") {
        selectBankOption();
    }
}
function selectBankOption() {
    switch (BankOption.value) {
        case 'FCMB':
            verify();
            break;
        case 'EcoBank':
            verify();
            break;
        case 'FirstBank':
            verify();
            break;
        case 'Fidelity':
            verify(); 
            break;
        case 'Access':
            verify(); 
            break;
        case 'xtra':
            verify(); 
            break;
        case 'Opay':
            verify(); 
            break;
        case 'Carbon':
            verify(); 
            break;
        case 'JIAZ':
            verify(); 
            break;
        default:
            eBankOption.innerHTML = 'select provided Bank'
            break;
    }
}
function verify(){
    if(passwordNo.value!=""){
        mess.innerHTML="You have successfully transfered N"+ amount.value.valueOf(amount) + " " + "to" +" "+ accountNo.value.valueOf(accountNo)+"("+ BankOption.value.valueOf(BankOption)+")" + ", at N26.5 charge"
        mess.style.color="green";
        mess.style.backgroundColor="white";
        refresh();
    }
}

function airtimeOrder(){
    if (accountType[0].checked == true || accountType[1].checked == true) {
        if (amount.value <= 10000) {
            if (accountNo != "") {
                if(passwordNo.value!=""){
                    mess.innerHTML="You have purchased card of N"+ amount.value.valueOf(amount) + " " + "to" +" "+ accountNo.value.valueOf(accountNo) + "(Phone Number)"
                    mess.style.color="green";
                    mess.style.backgroundColor="white";
                refresh();
                }
            }
        } else {
            eAccNo.innerHTML = 'Invalid amount'
        }
    } else {
        SAEmess.innerHTML = 'select one option'
    }
}

function refresh(){
    operations.value='';
    accountType.checked='';
    amount.value='';
    accountNo.value='';
    BankOption.value='';
    passwordNo.value='';

}
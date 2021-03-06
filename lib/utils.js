module.exports = {
    generateID: function(length) {
        let result = ""
        let characters = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz0123456789'
        let characterslength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characterslength))
        }
        return result
    },
    generateNum: function(length) {
        let result = ""
        let characters = '0123456789'
        let characterslength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characterslength))
        }
        return result
    },
    generateEmail: function() {
        let values = "abcdefgh123456789"
        let email = ""
        let temp
        for (let i = 0; i < 10; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        temp = ""
        email += "@"
        for(let i=0; i <8; i++){
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp  
        }
        email += '.com'
        return email
    },
    generateNumbers: function() {
        let numbers = Math.floor(Math.random() * 900000000) + 1000000000
        return numbers.toString()
    },
    generateTodayDate: function() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
}
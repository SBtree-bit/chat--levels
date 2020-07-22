radio.onReceivedNumber(function (receivedNumber) {
    Letter = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    Letter += -1
})
input.onButtonPressed(Button.AB, function () {
    if (Letter == 1) {
        String2 = Letter
    } else if (Letter == 2) {
        String2 = Letter
    } else if (Letter == 3) {
        String2 = Letter
    } else if (Letter == 4) {
        String2 = Letter
    } else if (Letter == 5) {
        String2 = Letter
    } else if (Letter == 6) {
        String2 = Letter
    } else if (Letter == 7) {
        String2 = Letter
    } else if (Letter == 8) {
        String2 = Letter
    } else if (Letter == 9) {
        String2 = Letter
    } else if (Letter == 10) {
        String2 = Letter
    } else if (Letter == 11) {
        String2 = Letter
    } else if (Letter == 12) {
        String2 = Letter
    } else if (Letter == 13) {
        String2 = Letter
    } else if (Letter == 14) {
        String2 = Letter
    } else if (Letter == 15) {
        String2 = Letter
    } else if (Letter == 16) {
        String2 = Letter
    } else if (Letter == 17) {
        String2 = Letter
    } else if (Letter == 18) {
        String2 = Letter
    } else if (Letter == 19) {
        String2 = Letter
    } else if (Letter == 20) {
        String2 = Letter
    } else if (Letter == 21) {
        String2 = Letter
    } else if (Letter == 22) {
        String2 = Letter
    } else if (Letter == 23) {
        String2 = Letter
    } else if (Letter == 24) {
        String2 = Letter
    } else if (Letter == 25) {
        String2 = Letter
    } else if (Letter == 26) {
        String2 = Letter
    }
    radio.sendNumber(String2)
    chat += 1
})
input.onButtonPressed(Button.B, function () {
    Letter += 1
})
let levels = 0
let chat = 0
let String2 = 0
let Letter = 0
Letter = 0
let chatmax = 100
basic.forever(function () {
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else if (Letter == 4) {
        basic.showString("D")
    } else if (Letter == 5) {
        basic.showString("E")
    } else if (Letter == 6) {
        basic.showString("F")
    } else if (Letter == 7) {
        basic.showString("G")
    } else if (Letter == 8) {
        basic.showString("H")
    } else if (Letter == 9) {
        basic.showString("I")
    } else if (Letter == 10) {
        basic.showString("J")
    } else if (Letter == 11) {
        basic.showString("K")
    } else if (Letter == 12) {
        basic.showString("L")
    } else if (Letter == 13) {
        basic.showString("M")
    } else if (Letter == 14) {
        basic.showString("N")
    } else if (Letter == 15) {
        basic.showString("O")
    } else if (Letter == 16) {
        basic.showString("P")
    } else if (Letter == 17) {
        basic.showString("Q")
    } else if (Letter == 18) {
        basic.showString("R")
    } else if (Letter == 19) {
        basic.showString("S")
    } else if (Letter == 20) {
        basic.showString("T")
    } else if (Letter == 21) {
        basic.showString("U")
    } else if (Letter == 22) {
        basic.showString("V")
    } else if (Letter == 23) {
        basic.showString("W")
    } else if (Letter == 24) {
        basic.showString("X")
    } else if (Letter == 25) {
        basic.showString("Y")
    } else if (Letter == 26) {
        basic.showString("Z")
    } else {
        if (Letter == 27) {
            Letter = 1
        }
    }
    if (chat == chatmax) {
        levels += 1
        chatmax += 100
        chat = 0
    }
})

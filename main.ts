basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        basic.showIcon(IconNames.Sad)
        servos.P0.setAngle(150)
        basic.pause(2000)
        servos.P0.setAngle(0)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    }
})

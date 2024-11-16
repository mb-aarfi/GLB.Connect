function moveFocus(current) {
    const currentInput = document.getElementById(`OTP${current}`);
    if (currentInput.value.length === 1) {
        const nextInput = document.getElementById(`OTP${current + 1}`);
        if (nextInput) {
            nextInput.focus();
        }
    } else if (currentInput.value.length === 0 && current > 1) {
        const prevInput = document.getElementById(`OTP${current - 1}`);
        if (prevInput) {
            prevInput.focus();
        }
    }
}

document.querySelector('#naj_b').addEventListener('click', function(event) {
    const i1 = document.querySelector('#naj_i1')
    const obj = document.querySelector('#naj');
    const overlay = document.querySelector('#overlay');
    const i2 = document.querySelector('#naj_i2');
    const i3 = document.querySelector('#naj_i3');
    const btn = document.querySelector('#naj_b');
    const i4 = document.querySelector('#naj_i4');
    const a = document.querySelector('#naj_a');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
        a.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'none';
        btn.innerHTML = 'See more';
    } else {
        a.style.display = 'block';
        i3.style.display = 'block';
        i2.style.display = 'block';
        i4.style.display = 'block';
        obj.classList.add('active');
        overlay.style.display = 'block';
        btn.innerHTML = 'Close';
        console.log('alright');
    }   
});
document.querySelector('#nam_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const but = document.querySelector('#nam_b')
    const obj = document.querySelector('#nam');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#nal_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#nal');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#ai_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#ai');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#an_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#an');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#ac_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#ac');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#prsx_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#prsx');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#prj_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#prj');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
document.querySelector('#prx2_b').addEventListener('click', function(event) {
    event.stopPropagation();
    const obj = document.querySelector('#prx2');
    const overlay = document.querySelector('#overlay');
    if (obj.classList.contains('active')) {
        obj.classList.remove('active');
        overlay.style.display = 'none';
    } else {
        obj.classList.add('active');
        overlay.style.display = 'block';
    }   
});
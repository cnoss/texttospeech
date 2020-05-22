let synth;
let utt;
$(window).on("load", function () {

    synth = window.speechSynthesis;
    let voiceSelect = $('#voiceSelect');
    let voices = synth.getVoices();

    for (let i in voices) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.value = i;
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.append(option);
    }

});

function play() {
    $('#play-button').hide();
    $('#pause-button').show();
    if (synth.paused) {
        synth.resume();
    } else {
        utt = new SpeechSynthesisUtterance(getTexts());
        utt.pitch = parseFloat($('#speed').val());
        utt.voice = synth.getVoices()[$('#voiceSelect').val()];
        utt.volume = parseFloat($('#volume').val());
        synth.speak(utt);
    }
}

function pause() {
    $('#pause-button').hide();
    synth.pause();
    $('#play-button').show();
}

function stop() {
    $('#pause-button').hide();
    synth.cancel();
    $('#play-button').show();
}

function getTexts() {
    let text = "";
    text += $('.tts-content').find('h1').text();
    text += "\n";
    text += $('.tts-content').find('p').text();
    return text;
}


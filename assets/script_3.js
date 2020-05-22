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
        utt = new SpeechSynthesisUtterance(getContent());
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

function getContent() {
    let content = getTexts();
    return content;
}


function getTexts() {
    let text = "";
    text += searchForSSML('h1');
    text += "\n";
    text += searchForSSML('p');
    return text;
}

function searchForSSML(selector) {
    let text = "";
    $('.tts-content').find(selector).each(function () {
        if ($(this).find('.ssml-tag').length > 0) {
            text += renderSSML($(this));
        } else {
            text += $(this).text();
        }
    });
    return text;
}

function renderSSML(element) {
    let convertElement = element.clone();
    convertElement.find('.ssml-tag').each(function () {
        let ssmlJson = $(this).data("ssml");
        if (ssmlJson.hasOwnProperty("sub")) {
            $(this).text(ssmlJson.sub.alias);
        } else if (ssmlJson.hasOwnProperty("say-as")) {
            if (ssmlJson['say-as']['interpret-as'] === "characters") {
                $(this).text($(this).text().split('').join(' '));
            } else if (ssmlJson['say-as']['interpret-as'] === "unit") {
                $(this).text(convertUnit($(this)));
            }
        }
    });
    return convertElement.text();
}

function convertUnit(element) {
    if (element.text().includes("km")) {
        element.text(element.text().replace("km", " Kilometer"));
    } else if (element.text().includes("cm")) {
        element.text(element.text().replace("cm", " Zentimeter"));
    } else if (element.text().includes("mm")) {
        element.text(element.text().replace("mm", " Millimeter"));
    } else if (element.text().includes("m")) {
        element.text(element.text().replace("m", " Meter"));
    }
}
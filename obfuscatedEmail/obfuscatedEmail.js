const obfElems = document.querySelectorAll(`obfemail`);
console.info(`[obfemail] ${obfElems.length} element(s) found...`);

for (let i = 0; i < obfElems.length; i++){
  let obfClass = obfElems[i].dataset.class || "bodytext";
  let mail = atob(obfElems[i].dataset.email.trim());
  obfElems[i].outerHTML = `<p class="${obfClass}"><a href="mailto:${mail}" data-track-event="click" data-track-action="email_link">${mail}</a></p>`;
}
/* Copyright Hjemmesidehuset 2025 - MIT License */

const url = document.location.pathname;

if(url.startsWith("/b/")){
  const shareWrapper = document.querySelector(".shareWrapper");
  
  const pinButton = document.createElement("a");
  pinButton.classList.add("blogShare");
  pinButton.dataset.customsocial = "pinterest";
  pinButton.target = "_blank";
  pinButton.href = `http://pinterest.com/pin/create/button/?url=${document.location.href}`;

  // styling
  pinButton.style.padding = "0!important";
  pinButton.style.width = "40px";
  pinButton.style.height = "40px";
  pinButton.style.backgroundColor = "#e60023";
  pinButton.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg fill='%23fff' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='m16.094 4c-5.077 0-10.094 3.3833-10.094 8.8613 0 3.483 1.9585 5.4629 3.1465 5.4629 0.49 0 0.77344-1.366 0.77344-1.752 0-0.46-1.1738-1.4405-1.1738-3.3555 0-3.978 3.0283-6.7969 6.9473-6.7969 3.37 0 5.8633 1.9136 5.8633 5.4316 0 2.627-1.0548 7.5547-4.4688 7.5547-1.232 0-2.2852-0.89002-2.2852-2.166 0-1.87 1.1973-3.6813 1.1973-5.6113 0-3.276-4.5371-2.6817-4.5371 1.2773 0 0.831 0.10361 1.7508 0.47461 2.5078-0.682 2.939-1.9375 7.6233-1.9375 10.652 0 0.935 0.13366 1.855 0.22266 2.791 0.168 0.188 0.084797 0.16822 0.3418 0.074219 2.494-3.414 2.2626-4.3875 3.3906-8.8555 0.609 1.158 2.1827 1.7812 3.4297 1.7812 5.255 0 7.6152-5.1213 7.6152-9.7383 0-4.913-4.2452-8.1191-8.9062-8.1191z'/></svg>")`;
  pinButton.style.backgroundSize = "contain";
  pinButton.style.verticalAlign = "top";
  pinButton.style.display = "inline-block";
  pinButton.style.lineHeight = "40px";
  pinButton.style.textDecoration = "none";
  pinButton.style.position = "relative";
  pinButton.style.cursor = "pointer";
  pinButton.style.backgroundSize = "70%";
  pinButton.style.backgroundRepeat = "no-repeat";
  pinButton.style.backgroundPosition = "center";

  try{
    shareWrapper.append(pinButton);
  } catch(error){
    console.error(`Mono Editor Scripts > Couldn't add Pinterest share button.`);
  }
}
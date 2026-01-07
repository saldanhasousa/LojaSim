    // 1️⃣ Define a data final
    const dataFinal = new Date();
    dataFinal.setMinutes(dataFinal.getMinutes() + 1); // +1 minuto para teste

    // 2️⃣ Pega os elementos
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // 3️⃣ Função para atualizar o countdown
    function atualizarCountdown() {
      const agora = new Date();
      const diferenca = dataFinal - agora;

      if (diferenca <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      daysEl.textContent = String(dias).padStart(2, "0");
      hoursEl.textContent = String(horas).padStart(2, "0");
      minutesEl.textContent = String(minutos).padStart(2, "0");
      secondsEl.textContent = String(segundos).padStart(2, "0");
    }

    // 4️⃣ Inicia
    atualizarCountdown();
    const intervalo = setInterval(atualizarCountdown, 1000);

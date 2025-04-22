//corrección del error a la hora de agrandar y disminuir tamaño
document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");
  
    box.addEventListener("click", () => {
      const numero = Math.floor(Math.random() * 6) + 1;
      box.textContent = numero;
      box.classList.add("on");
      
      // Cambiar tamaño basado en el número
      const nuevoTamaño = 100 + numero * 10; // Aumenta el tamaño con el número
      box.style.width = `${nuevoTamaño}px`;
      box.style.height = `${nuevoTamaño}px`;
      setTimeout(() => {
        box.classList.remove("on");
        box.style.width = "100px"; // Resetear tamaño
        box.style.height = "100px"; // Resetear tamaño
      }, 2000);
      
      // Mostrar mensaje personalizado
      if (numero === 6) {
      alert("¡Felicidades! Has sacado el número más alto.");
    } else if (numero === 1) {
      alert("¡Sigue intentándolo! Podrías sacar un 6.");
    }
    });
  });
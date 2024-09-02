const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        document.querySelectorAll('.acordeon').forEach((item) => {
            item.classList.remove('open'); // Fecha todos os acordeões
        });

        if (!isOpen) {
            acordeon.classList.add('open'); // Abre o acordeão clicado
        }
    });
});

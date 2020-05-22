const clock = document.getElementById('clock');
        setInterval(() => {
           const now = moment();
           const humanReadable = now.format('hh:mm:ssA');
           clock.textContent = humanReadable;
        }, 1000 )
document.addEventListener('DOMContentLoaded', () => {
    const players = [
        { name: 'Игрок 1', position: 'Вратарь', image: 'img/player1.jpg' },
        { name: 'Игрок 2', position: 'Защитник', image: 'img/player2.jpg' },
        { name: 'Игрок 3', position: 'Полузащитник', image: 'img/player3.2.jpg' },
        { name: 'Игрок 4', position: 'Нападающий', image: 'img/player4.jpg' }
    ];

    const schedule = [
        { date: '01.06.2024', opponent: 'Команда А', location: 'Ташкент' },
        { date: '08.06.2024', opponent: 'Команда B', location: 'Ташкент' },
        { date: '15.06.2024', opponent: 'Команда C', location: 'Ташкент' }
    ];

    const playerList = document.querySelector('.player-list');
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>Позиция: ${player.position}</p>`;
        playerList.appendChild(playerDiv);
    });

    const scheduleList = document.querySelector('.schedule-list');
    schedule.forEach(game => {
        const gameLi = document.createElement('li');
        gameLi.classList.add('game');
        gameLi.innerHTML = `
            <p>Дата: ${game.date}</p>
            <p>Против: ${game.opponent}</p>
            <p>Место: ${game.location}</p>`;
        scheduleList.appendChild(gameLi);
    });
});

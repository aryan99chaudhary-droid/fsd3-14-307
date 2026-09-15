let teams = [
    {
        id: 1,
        tname: "rusty",
        tl: "Aashish Raj",
        email: "aashish@example.com",
        members: 5
    },
    {
        id: 2,
        tname: "table",
        tl: "Arpit",
        email: "arpit@example.com",
        members: 7
    }
];

let nextid = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => {
    return teams.find((team) => team.id === id);
};

export const addTeam = (newteam) => {
    const team = {
        id: nextid++,
        ...newteam
    };

    teams.push(team);
    return team;
};

export const updateTeamById = (id, updateTeam) => {
    const team = getTeamById(id);

    if (!team) return null;

    Object.assign(team, updateTeam);
    return team;
};

export const deleteTeamById = (id) => {
    const index = teams.findIndex((team) => team.id === id);

    if (index === -1) return null;

    const deletedTeam = teams.splice(index, 1)[0];

    return deletedTeam;
};
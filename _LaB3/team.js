let teams = [
    { 
         id: 1,
         tname: "Rusty",
         tl:'Aryan Choudhary',
         email: "aryan99chaudhary@gmail.com",
         members: 6,
        },
     { 
         id: 2,
         tname: "Husky",
         tl:'John Doe',
         email: "john.doe@gmail.com",
         members: 5,
        },
    
    
    ];

    let nextId = 3;

    export const getAllTeams = () => teams;
    export const getTeamById = (id) => teams.find(team => team.id === id);
    export const addTeam = (team) => {
        const newTeam = { id: nextId++, ...team };
        teams.push(newTeam);
        return newTeam;
    };
    export const updateTeamById = (id, updatedTeam) => {
        const team = getTeamById(id);
        if (!team) return null;
        Object.assign(team, updatedTeam);
        return team;
    };

    export const deleteTeamById = (id) => {
        const index = teams.findIndex(team => team.id === id);
        if (index === -1) return false;
        teams.splice(index, 1);
        return true;
    };

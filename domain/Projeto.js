module.exports = class Projeto {

    constructor(name, fase, team, hdev, hprod, clientid, companId, teamlider, foldersid, totalpages, permissions, labelScheme) {

        this.name = name
        this.fase = fase
        this.hdev = hdev
        this.team = team
        this.hprod = hprod
        this.clientid = clientid
        this.companId = companId
        this.teamlider = teamlider
        this.foldersid = foldersid
        this.totalpages = totalpages
        this.permissions = permissions
        this.labelScheme = labelScheme
    }
}
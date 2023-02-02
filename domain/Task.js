module.exports = class Task {

    constructor(tipo, field, title, origin, status, companyid, projectid, assignedto, description, deliverydate) {
        
        this.tipo = tipo
        this.field = field
        this.title = title
        this.origin = origin
        this.status = status
        this.companyid = companyid
        this.projectid = projectid
        this.assignedto = assignedto
        this.description = description
        this.deliverydate = deliverydate
        
    }
}
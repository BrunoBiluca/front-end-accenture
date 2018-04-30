export class Demand {
    public date: string;
    public name: string;
    public capacity: number;
    public planningAttendance: number;
    public fulfilledAttendance: number;

    constructor(name: string, date: string, capacity: number, planningAttendance: number, fulfilledAttendance: number){
        this.name = name;
        this.date = date;
        this.capacity = capacity;
        this.planningAttendance = planningAttendance;
        this.fulfilledAttendance = fulfilledAttendance;
    }
}
//check the infomation of the system and reduce the risk of the system being hacked
var os = require("os")
class fix{
    constructor(){
    }
    get_the_free_mem(){
        return os.freemem();
    }
    get_the_cpu_info(){
        return os.cpus();
    }
    compute_the_cpu_usage(){
        return os.loadavg();
    }
    get_total_mem(){
        return os.totalmem();
    }
    compute_the_mark(){
        var cpu_mark=this.compute_the_cpu_usage()/this.get_the_cpu_info().length;
        var mem_mark=this.get_the_free_mem()/this.get_total_mem();
        return cpu_mark+mem_mark;
        
    }
}
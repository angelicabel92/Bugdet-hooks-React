export const checkBugdet = (budget, restBugdet) => {
    let clase;
    // Comprobar el 25% 
    if( (budget / 4) > restBugdet) {
         clase = 'alert alert-danger';
    } else if( (budget / 2) > restBugdet) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
}

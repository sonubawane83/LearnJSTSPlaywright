let response: number[] = [200, 201, 404, 500, 302, 403];

function getfilter(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {  // filter return the condition 
        return code >= 400; //condition 
    });

}

console.log("All codes ", response);
console.log("failed codes", getfilter(response));

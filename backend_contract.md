APIs:

/search:
    req:{
        city:string,
        validity:{
            start:string,
            end:string
        },
        startIndex:integer,
        maxRows:integer
    }

    res:{
        rows:{
            [array of rows] // decide the parameters + status
        },
        totalRows: number of total rows available
    }


/enable/approve: //decide on the name
    req:{
        schemeId: string,
        currentStatus: string,
        changeTo: string
    }

    res:{
        currentStatus: string, // changed status
    }


/getAllTemplateConstants:
    req:{
        city:string
    }

    res:{
        templates:[
            {
                schemetype: string,
                constraints: [string],
                slabs:[]
            },
            .
            .
            .
        ]
    }

/getTemplate: 
    req:{
        templateName:string
    }

    res:{
        template: {form json}
    }

/carListUpload: 
    req:{
        fileName: string,
        fileStream: filestream
    }

    res:{
        carFilterId: string,
    }

/schemeUpload: 
    req:{
        carFilterId: string,
        scheme: {schemeForm json}
    }

    res:{
        SchemeId: string,
    }

/saveDoc:
    req:{
        listOfSchemes:[array of strings]
    }

    res:{
        docId: string
    }

/getByDocId:
    req:{
        docId: string
    }

    res:{
        docResponse:{ doc json}
    }

/getAllDocIds:
    req:{
        city: string,
    }

    res:{
        listOfDocNames:[ array of docnames/aliases ]
    }

////////preview api to be discussed
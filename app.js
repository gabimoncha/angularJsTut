var app = angular.module('store', []);


/*  Tema: Sa se imparta pagina in doua zone
    In stanga sa apara o lista (ul > li) doar cu numele candidatilor
    iar atunci cand se da click pe unul din ei, in zona din
    dreapta sa se afiseze cv-ul intreg.
    Totodata in partea de sus a aplicatiei sa se puna un buton
    de add cv care la apasare, sa afiseze in zona din dreapta 
    a aplicatiei formularul de adaugare in locul cv-ului candidatului
    selectat.
    Dupa salvare, formularul trebuie sa dispara iar in locul
    lui sa se afiseze cv-ul formatat prin interpolari.
    Pentru a diferentia in lista din stanga cadidatul selectat
    trebuie sa fie decorat cu o clasa
    care sa indice ca acesta este cel selectat. (Indiciu: ng-class)
    Formularul de adaugare nu trebuie apara decat dupa apasarea butonului
    add cv si sa dispara dupa salvare sau selectarea unui candidat.
    */

app.controller('cvListCtrl', function ($scope) {
    $scope.cvList = cVs;
    $scope.expandOrNot = false;
    $scope.expandedCV = cVs;
    $scope.cvItem = NaN;
    $scope.selectedItem = -1;
    $scope.itemClick = function (cvItem) {
        $scope.cvItem = cvItem;
        $scope.expandOrNot = true;
        $scope.selectedItem = cvItem;
        $scope.cvForm = false;        
    };



    $scope.submitCV = function (cv) {
        cv.phones = _.uniq(cv.phones, false, function (it) {
            return it.phone;
        });
        cv.sex = $scope.currentCV.sex;
        $scope.cvList.push(cv);
        $scope.currentCV = angular.copy(emptyCV);
        $scope.cvForm = false;
        $scope.expandOrNot = false;
        $scope.selectedItemd = NaN;
    };

    var emptyCV = {
        sexes: [
            'Male',
            'Female'
        ],
        phones: [
            {
                phoneID: 0,
                phone: ''
            }
        ],
        institutions: [
            {
                educationID: 0,
                name: '',
                type: '',
                degre: ''
            }
        ],
        workplaces: [
            {
                workplaceID: 0,
                name: '',
                department: '',
                industry: '',
                time: ''
            }
        ]
    };

    $scope.currentCV = angular.copy(emptyCV);

    $scope.addPhoneInput = function () {
        $scope.currentCV.phones.push({
            id: $scope.currentCV.phones.length,
            phone: ''
        })
    };
    $scope.removePhoneInput = function () {
        if ($scope.currentCV.phones.length === 1) return;
        $scope.currentCV.phones.pop();
    };


    $scope.addEducationInput = function () {
        $scope.currentCV.institutions.push({
            id: $scope.currentCV.institutions.length,
            name: '',
            type: '',
            degree: ''
        })
    };
    $scope.removeEducationInput = function () {
        if ($scope.currentCV.institutions.length === 1) return;
        $scope.currentCV.institutions.pop();
    };


    $scope.addWorkplaceInput = function () {
        $scope.currentCV.workplaces.push({
            id: $scope.currentCV.workplaces.length,
            name: '',
            department: '',
            industry: '',
            time: ''
        })
    };
    $scope.removeWorkplaceInput = function () {
        if ($scope.currentCV.workplaces.length === 1) return;
        $scope.currentCV.workplaces.pop();
    };

    $scope.cvForm = false;

    $scope.showForm = function () {
        return $scope.cvForm;
    };

    $scope.addCVButton = function () {
        $scope.cvForm = !$scope.cvForm;
        $scope.expandOrNot = false;
        $scope.selectedItem = -1;
    };

    $scope.cvList = cVs;


});



var cVs = [
    {
        candidateID: 0,
        name: 'iXsu',
        surname: 'Lescu',
        age: 20,
        sex: 'M',
        address: 'str. Vatra Luminoasa',
        phones: [
            {
                phoneID: 0,
                phone: '+40 728 218 292'
            },
            {
                phoneID: 1,
                phone: '+48 743 325 214'
            }
        ],
        education: [
            {
                educationID: 0,
                name: 'POLI',
                type: 'University',
                degree: 'Bachelor'
            },
            {
                educationID: 1,
                name: 'Cevantes',
                type: 'High-School',
                degree: 'Diploma'
            }
        ],
        experience: [
            {
                workplaceID: 0,
                name: 'Softeh',
                department: 'IT',
                industry: 'Healthcare',
                time: 1
            }
        ]
    },
    {
        candidateID: 1,
        name: 'iYgrec',
        surname: 'Cescu',
        age: 58,
        sex: 'M',
        address: 'str. Vatra Intunecoasa',
        phones: [
            {
                phoneID: 0,
                phone: '+40 762 100 290'
            },
            {
                phoneID: 1,
                phone: '+32 987 194 214'
            },
            {
                phoneID: 2,
                phone: '+49 056 039 292'
            }

        ],
        education: [
            {
                educationID: 0,
                name: 'UB',
                type: 'University',
                degree: 'Ph D.'
            },
            {
                educationID: 1,
                name: 'UB',
                type: 'University',
                degree: 'Masters'
            },
            {
                educationID: 2,
                name: 'POLI',
                type: 'University',
                degree: 'Bachelor'
            },
            {
                educationID: 3,
                name: 'Viteanzes',
                type: 'High-School',
                degree: 'Diploma'
            }
        ],
        experience: [
            {
                workplaceID: 0,
                name: 'InfoWorld',
                department: 'IT',
                industry: 'Healthcare',
                time: 10
            },
            {
                workplaceID: 1,
                name: 'BitDefender',
                department: 'IT',
                industry: 'Software',
                time: 20
            },
        ]
    }
];
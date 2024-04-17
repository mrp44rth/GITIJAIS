let i=1;
const data = [
[i++, "Abhinav Tiwari", "52472138", "./data/AbhinavTiwari_52472138/1.bmp", "./data/AbhinavTiwari_52472138/2.bmp", "./data/AbhinavTiwari_52472138/3.bmp", "./data/AbhinavTiwari_52472138/4.bmp", "./data/AbhinavTiwari_52472138/5.bmp"],
[i++, "Abhishek Singh", "28927485", "./data/AbhishekSingh_28927485/1.bmp", "./data/AbhishekSingh_28927485/2.bmp", "./data/AbhishekSingh_28927485/3.bmp", "./data/AbhishekSingh_28927485/4.bmp", "./data/AbhishekSingh_28927485/5.bmp"],
[i++, "Abhishek Vishwakarma", "2271721", "./data/AbhishekVishwakarma_2271721/1.bmp", "./data/AbhishekVishwakarma_2271721/2.bmp", "./data/AbhishekVishwakarma_2271721/3.bmp", "./data/AbhishekVishwakarma_2271721/4.bmp", "./data/AbhishekVishwakarma_2271721/5.bmp"],
[i++, "Ajad Ahamad", "99132567", "./data/AjadAhamad_99132567/1.bmp", "./data/AjadAhamad_99132567/2.bmp", "./data/AjadAhamad_99132567/3.bmp", "./data/AjadAhamad_99132567/4.bmp", "./data/AjadAhamad_99132567/5.bmp"],
[i++, "Ajeet Yadav", "23992419", "./data/AjeetYadav_23992419/1.bmp", "./data/AjeetYadav_23992419/2.bmp", "./data/AjeetYadav_23992419/3.bmp", "./data/AjeetYadav_23992419/4.bmp", "./data/AjeetYadav_23992419/5.bmp"],
[i++, "Amita", "68496965", "./data/Amita_68496965/1.bmp", "./data/Amita_68496965/2.bmp", "./data/Amita_68496965/3.bmp", "./data/Amita_68496965/4.bmp", "./data/Amita_68496965/5.bmp"],
[i++, "Anit Kumar", "41940551", "./data/AnitKumar_41940551/1.bmp", "./data/AnitKumar_41940551/2.bmp", "./data/AnitKumar_41940551/3.bmp", "./data/AnitKumar_41940551/4.bmp", "./data/AnitKumar_41940551/5.bmp"],
[i++, "Anubhav Maurya", "10295221", "./data/AnubhavMaurya_10295221/1.bmp", "./data/AnubhavMaurya_10295221/2.bmp", "./data/AnubhavMaurya_10295221/3.bmp", "./data/AnubhavMaurya_10295221/4.bmp", "./data/AnubhavMaurya_10295221/5.bmp"],
[i++, "Arun Kumar", "12685076", "./data/ArunKumar_12685076/1.bmp", "./data/ArunKumar_12685076/2.bmp", "./data/ArunKumar_12685076/3.bmp", "./data/ArunKumar_12685076/4.bmp", "./data/ArunKumar_12685076/5.bmp"],
[i++, "Arun Kumar", "82452879", "./data/ArunKumar_82452879/1.bmp", "./data/ArunKumar_82452879/2.bmp", "./data/ArunKumar_82452879/3.bmp", "./data/ArunKumar_82452879/4.bmp", "./data/ArunKumar_82452879/5.bmp"],
[i++, "Ayush Mishra", "96608562", "./data/AyushMishra_96608562/1.bmp", "./data/AyushMishra_96608562/2.bmp", "./data/AyushMishra_96608562/3.bmp", "./data/AyushMishra_96608562/4.bmp", "./data/AyushMishra_96608562/5.bmp"],
[i++, "Chandan Kori", "73682379", "./data/ChandanKori_73682379/1.bmp", "./data/ChandanKori_73682379/2.bmp", "./data/ChandanKori_73682379/3.bmp", "./data/ChandanKori_73682379/4.bmp", "./data/ChandanKori_73682379/5.bmp"],
[i++, "Chandra Abhishek", "90531849", "./data/ChandraAbhishek_90531849/1.bmp", "./data/ChandraAbhishek_90531849/2.bmp", "./data/ChandraAbhishek_90531849/3.bmp", "./data/ChandraAbhishek_90531849/4.bmp", "./data/ChandraAbhishek_90531849/5.bmp"],
[i++, "Hariom", "13003485", "./data/Hariom_13003485/1.bmp", "./data/Hariom_13003485/2.bmp", "./data/Hariom_13003485/3.bmp", "./data/Hariom_13003485/4.bmp", "./data/Hariom_13003485/5.bmp"],
[i++, "Meenakshi Singh", "69383382", "./data/MeenakshiSingh_69383382/1.bmp", "./data/MeenakshiSingh_69383382/2.bmp", "./data/MeenakshiSingh_69383382/3.bmp", "./data/MeenakshiSingh_69383382/4.bmp", "./data/MeenakshiSingh_69383382/5.bmp"],
[i++, "Parmanand Maurya", "60045311", "./data/ParmanandMaurya_60045311/1.bmp", "./data/ParmanandMaurya_60045311/2.bmp", "./data/ParmanandMaurya_60045311/3.bmp", "./data/ParmanandMaurya_60045311/4.bmp", "./data/ParmanandMaurya_60045311/5.bmp"],
[i++, "Rakesh Kumar Vishwakarma", "37386334", "./data/RakeshKumarVishwakarma_37386334/1.bmp", "./data/RakeshKumarVishwakarma_37386334/2.bmp", "./data/RakeshKumarVishwakarma_37386334/3.bmp", "./data/RakeshKumarVishwakarma_37386334/4.bmp", "./data/RakeshKumarVishwakarma_37386334/5.bmp"],
[i++, "Ravindra Rajak", "51129245", "./data/RavindraRajak_51129245/1.bmp", "./data/RavindraRajak_51129245/2.bmp", "./data/RavindraRajak_51129245/3.bmp", "./data/RavindraRajak_51129245/4.bmp", "./data/RavindraRajak_51129245/5.bmp"],
[i++, "Sarita", "67925114", "./data/Sarita_67925114/1.bmp", "./data/Sarita_67925114/2.bmp", "./data/Sarita_67925114/3.bmp", "./data/Sarita_67925114/4.bmp", "./data/Sarita_67925114/5.bmp"],
[i++, "Satyam Singh", "28129848", "./data/SatyamSingh_28129848/1.bmp", "./data/SatyamSingh_28129848/2.bmp", "./data/SatyamSingh_28129848/3.bmp", "./data/SatyamSingh_28129848/4.bmp", "./data/SatyamSingh_28129848/5.bmp"],
[i++, "Shivam", "1394006", "./data/Shivam_1394006/1.bmp", "./data/Shivam_1394006/2.bmp", "./data/Shivam_1394006/3.bmp", "./data/Shivam_1394006/4.bmp", "./data/Shivam_1394006/5.bmp"],
[i++, "Shivam Gupta", "56107059", "./data/ShivamGupta_56107059/1.bmp", "./data/ShivamGupta_56107059/2.bmp", "./data/ShivamGupta_56107059/3.bmp", "./data/ShivamGupta_56107059/4.bmp", "./data/ShivamGupta_56107059/5.bmp"],
[i++, "Shivam Kumar Saroj", "92930702", "./data/ShivamKumarSaroj_92930702/1.bmp", "./data/ShivamKumarSaroj_92930702/2.bmp", "./data/ShivamKumarSaroj_92930702/3.bmp", "./data/ShivamKumarSaroj_92930702/4.bmp", "./data/ShivamKumarSaroj_92930702/5.bmp"],
[i++, "Shivam Singh", "7059896", "./data/ShivamSingh_7059896/1.bmp", "./data/ShivamSingh_7059896/2.bmp", "./data/ShivamSingh_7059896/3.bmp", "./data/ShivamSingh_7059896/4.bmp", "./data/ShivamSingh_7059896/5.bmp"],
[i++, "Shivankit", "76688919", "./data/Shivankit_76688919/1.bmp", "./data/Shivankit_76688919/2.bmp", "./data/Shivankit_76688919/3.bmp", "./data/Shivankit_76688919/4.bmp", "./data/Shivankit_76688919/5.bmp"],
[i++, "Sohil Akhtar", "3156641", "./data/SohilAkhtar_3156641/1.bmp", "./data/SohilAkhtar_3156641/2.bmp", "./data/SohilAkhtar_3156641/3.bmp", "./data/SohilAkhtar_3156641/4.bmp", "./data/SohilAkhtar_3156641/5.bmp"],
[i++, "Vijay Soni", "828441", "./data/VijaySoni_828441/1.bmp", "./data/VijaySoni_828441/2.bmp", "./data/VijaySoni_828441/3.bmp", "./data/VijaySoni_828441/4.bmp", "./data/VijaySoni_828441/5.bmp"],
[i++, "Vikas Kumar", "36567629", "./data/VikasKumar_36567629/1.bmp", "./data/VikasKumar_36567629/2.bmp", "./data/VikasKumar_36567629/3.bmp", "./data/VikasKumar_36567629/4.bmp", "./data/VikasKumar_36567629/5.bmp"],
[i++, "VINOD KUMAR", "21425871", "./data/VINODKUMAR_21425871/1.bmp", "./data/VINODKUMAR_21425871/2.bmp", "./data/VINODKUMAR_21425871/3.bmp", "./data/VINODKUMAR_21425871/4.bmp", "./data/VINODKUMAR_21425871/5.bmp"],
[i++, "Yasmeen", "49204890", "./data/Yasmeen_49204890/1.bmp", "./data/Yasmeen_49204890/2.bmp", "./data/Yasmeen_49204890/3.bmp", "./data/Yasmeen_49204890/4.bmp", "./data/Yasmeen_49204890/5.bmp"],
[i++, "YOGESH", "81082276", "./data/YOGESH_81082276/1.bmp", "./data/YOGESH_81082276/2.bmp", "./data/YOGESH_81082276/3.bmp", "./data/YOGESH_81082276/4.bmp", "./data/YOGESH_81082276/5.bmp"],

];

let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });

    const contrastRange = document.getElementById('contrast');
    contrastRange.addEventListener('input', function () {
        const contrastValue = this.value;
        document.querySelector('.contrast-value').textContent = `${contrastValue}%`;
        updateImageContrast(contrastValue);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = `invert(100%) contrast(${document.getElementById('contrast').value}%)`; // Color invert and apply contrast
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateImageContrast(contrastValue) {
    const images = document.querySelectorAll('td img');
    images.forEach(img => {
        img.style.filter = `invert(100%) contrast(${contrastValue}%)`;
    });
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}

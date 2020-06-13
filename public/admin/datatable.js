switch (content) {
    case 'category' :
    column = [
        {data: 'id', name: 'id'},
        {data: 'name', name: 'name'},
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
    break;
    case 'post' :
    column = [
        {data: 'id', name: 'id'},
        {data: 'title', name: 'title'},
        {data: 'category.name', name: 'category'},
        {
            data: 'active',
            render: function (data, type, row) {

                if ({data:'active'} == true) {
                    return 'Accepted';
                }
                else {
                    return 'Waiting';

                }
            }
        },
        {data: 'action', name: 'action', orderable: false, searchable: false}
    ]
    break;
}

var table = $('#datatable').DataTable({
    autoWidth: true,
    processing: true,
    serverSide: true,
    responsive: true,
    autoWidth: true,
    order: [],
    ajax: url,
    language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page'
    },
    columns: column
});

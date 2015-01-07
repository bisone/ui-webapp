// JavaScript Document
//w2ui
$(function() {
    $('#grid').w2grid({
        name : 'grid',
        header : '列表名称',
        show : {
            toolbar : true,
            footer : true,
            header : true,
            lineNumbers: true,
            selectColumn: true,
            expandColumn: true
        },
        searches : [ {
            field : 'lname',
            caption : '名字',
            type : 'text'
        }, {
            field : 'fname',
            caption : '姓氏',
            type : 'text'
        }, {
            field : 'email',
            caption : '邮箱',
            type : 'text'
        } ],
        sortData : [ {
            field : 'recid',
            direction : 'ASC'
        } ],
        columns : [ {
            field : 'recid',
            caption : 'ID',
            size : '50px',
            sortable : true,
            attr : 'align=center'
        }, {
            field : 'lname',
            caption : '姓氏',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'fname',
            caption : '名字',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'email',
            caption : '邮件',
            size : '40%',
            sortable : true,
            resizable : true
        }, {
            field : 'sdate',
            caption : '起始时间',
            size : '120px',
            sortable : true,
            resizable : true
        } ],
        records : [ {
            recid : 1,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 2,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 3,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 4,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 5,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 6,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 7,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 8,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 9,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 20,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 21,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 22,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 23,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 24,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 25,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 26,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 27,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 28,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 31,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 32,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 33,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 34,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 35,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 36,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 37,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 38,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 39,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 40,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 41,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 42,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 43,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 44,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 45,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 46,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 47,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 48,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 51,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 52,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 53,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',

            sdate : '4/3/2012'
        }, {
            recid : 54,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 55,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 56,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 57,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 58,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 59,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 60,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 61,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 62,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 63,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 64,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 65,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 66,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 67,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 68,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        } ]
        ,
        onExpand: function (event) {
            $('#'+event.box_id).html('<div style="padding: 10px">Expanded content</div>').animate({ 'height': 100 }, 100);
        }
    });
});

$(document).ready(function() {
	$('#example1').dataTable( {
		"bAutoWidth": true,
		"aLengthMenu": [[10, 25, 50,100, -1], [10, 25, 50,100, "All"]],
		"bProcessing": true,
		"sAjaxSource": 'data/arrays.txt',
		"oLanguage": {
			"sLengthMenu": "每页显示 _MENU_ 条记录",
			"sZeroRecords": "抱歉， 没有找到",
			"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
			"sInfoEmpty": "没有数据",
			"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
			"oPaginate": {
			"sFirst": "首页",
			"sPrevious": "前一页",
			"sNext": "后一页",
			"sLast": "尾页"
		},
		"sZeroRecords": "没有检索到数据",
		 "columnDefs": [{
            "visible": false,
            "targets": 2
        }],
        "order": [[1, 'asc']],
        "drawCallback": function(settings) {
            var api = this.api();
            var rows = api.rows({
                page: 'current'
            }).nodes();
            var last = null;
 
            api.column(2, {
                page: 'current'
            }).data().each(function(group, i) {
                if (last !== group) {
                    $(rows).eq(i).before('<tr class="group"><td colspan="5">' + group + '</td></tr>');
 
                    last = group;
                }
            });		
		}
		}
	} );
	
	
	$('#example1 tbody').on('click', 'tr.group',
    function() {
        var currentOrder = table.order()[0];
        if (currentOrder[0] === 1 && currentOrder[1] === 'asc') {
            table.order([1, 'desc']).draw();
        } else {
            table.order([1, 'asc']).draw();
        }
    });
} );
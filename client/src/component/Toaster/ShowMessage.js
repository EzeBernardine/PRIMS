import toastr from "toastr";
import "toastr/build/toastr.css";
// import 'node_modules/tos'
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
export const ShowMessage = (header, message) => {
   let type = '';
      switch(header) {
        case 'DONE':
          type='success';
          break;
        case 'INFO':
          type = 'info';
          break;
        case 'ERROR':
            type = "error";
          break;
          case 'WARN':
            type = "warning";
          break;
        default:
          type = 'info';
          break;
      }

    toastr[type](message)

};
export const type = {
	DONE: "DONE",
	INFO: "INFO",
	ERROR: "ERROR",
	WARN: "WARN"
};

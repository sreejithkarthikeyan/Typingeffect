/*
 * Typing Effetc for Input Forms
 * http://pointslabs.co/
 * MIT licensed
 * Copyright (C) 2017 Sreejith K S, http://pointslabs.co/
 * sreeksleo@gmail.com
 * A simple jQuery plugin for typing effect 
 * need to Do more
 * sreejith k s
 */

(function ($) {


    var myOpt = {};
    var count = 0;
    var myFrame;

    var _arr = [];
    $.fn.typingeffect = function (options) {


        var opts = $.extend({}, $.fn.typingeffect.defaults, options);
        return this.each(function () {
            $this = this;
            $this.count = 0;
            this.myFrame = this;
            $.fn.typingeffect.init($this, opts);

        });
    };
    $.fn.typingeffect.defaults = {
        bgcolor: 'red',
        txtcolor: 'black',
        selecttext: 'Select',

    };
    $.fn.typingeffect.init = function (obj, opts) {
        $this.obj = obj;
        PluginFeatures.init($this, opts);
    };
    var IsHtml = {
        init: function isHTML(str) {
            var doc = new DOMParser().parseFromString(str, "text/html");
            return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
        }

    };
    var PluginFeatures = {
        init: function (obj, opts) {
            myOpt = opts;

            if ($(obj).length) {

                PluginFeatures.settextArea(obj, opts);

            } else {
                console.log("element does not exists");
            }
        },
        settextArea: function (obj, opts) {
            $(obj).attr('maxlength', opts.maxlength)
            $(obj).closest('.form').append('<div class="frame"></div>');
            $(obj).closest('.frame').width = $(obj).width;

            $(obj).keydown(function (e) {

                var currentText = $(this).val();
                if (currentText.length < opts.maxlength) {


                    var lastChar = currentText.substr(currentText.length - 1);

                    var keyCode = e.which;
                    var char = String.fromCharCode(e.which);

                    if ((e.which != 8) && (e.which != 37) && (e.which != 39) && (e.which != 13) && (e.which != 46) && (e.which != 16) && (e.which != 17) && (e.which != 18) && (e.which != 20) && (e.which != 40) && (e.which != 37) && (e.which != 38) && (e.which != 39) && (e.which != 35) && (e.which != 36)) {

                        //_arr.push(char);
                        if (e.which == 32) {
                            char = "&nbsp";

                        }
                        if (e.which == 190) {
                            char = ".";

                        }
                        createtypingeffect.create(obj, opts, char)

                    } else if ((e.which == 8) || (e.which == 46)) {

                        createtypingeffect.delete(obj, e.which)

                    }
                }

            });
        },

    };

    /**/
    var createtypingeffect = {
        create: function (obj, opts, val) {
            $(obj).click(function () {

                $(obj).focus();
                myFrame = $(obj).next('.frame');
                cursorPosition = $(obj).prop("selectionStart");
                count = cursorPosition;
            });
            myFrame = $(obj).next('.frame');
            cursorPosition = $(obj).prop("selectionStart");
            count = cursorPosition;
            var mask = $('<div>' + val + ' </div>').attr({
                'class': "txtBox",
                'id': "txt_" + count
            });

            if ((count == 0) && (cursorPosition == 0)) {
                var mc = $("#txt_0");
                if ($(myFrame).children().length < 1) {
                    $(mask).appendTo(myFrame);

                } else {
                    $(mask).prependTo(myFrame);
                }

            } else {

                cursorPosition = $(obj).prop("selectionStart");
                count = cursorPosition;
                var mcx = ('#txt_' + (count - 1));
                var sc = $(myFrame).find(mcx);
                $(mask).insertAfter(sc);

            }

            myFrame = $(obj).next('.frame');
            $(myFrame).find(".txtBox").each(function (i) {


                $(this).attr('id', "txt_" + i);

                setTimeout(function () {

                    $(myFrame).find(".txtBox").addClass('animate');


                }, 300);
            });

        },
        delete: function (obj, num) {
            myFrame = $(obj).next('.frame');


            cursorPosition = $(obj).prop("selectionStart");


            if (num == 8) {

                if ($(myFrame).children().length == cursorPosition) {

                    cursorPosition = $(obj).prop("selectionStart") - 1;

                } else {


                }

            } else {

                cursorPosition = $(obj).prop("selectionStart") - 0;

            }

            if (cursorPosition >= 0) {


                $(myFrame).find("#txt_" + cursorPosition).removeClass('animate').addClass('delanimate');
                $(myFrame).find("#txt_" + cursorPosition).animate({

                    transform: 'scale(1,1)',

                }, "fast", function () {
                    $(this).remove();
                    $(myFrame).find(".txtBox").each(function (i) {


                        $(this).attr('id', "txt_" + i);
                    });
                });

            } else {

            }

        },
        remove: function () {

        }
    }

})(jQuery);

# Typingeffect
A jQuery plugin to create an animation effect for typing text

### Steps to create .

### External files .
```
 <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
 <script src="js/jquery-3.1.1.min.js"></script>

```

#### Add css Style
```<style type="text/css">
        html,
        body {
            font-family: 'Roboto', sans-serif;
        }
        
        .output {
            padding: 10px;
            min-height: 50px;
            margin: 20px 0;
            background-color: #f1f1f1;
            border: 1px solid #e4e4e4;
        }
        
        .frame {
            width: 100%;
            display: inline-block;
            outline: none;
            position: absolute;
            top: 0px;
            z-index: 9;
        }
        
        .txtBox {
            width: auto;
            height: auto;
            color: red;
            font-size: 16px;
            text-align: center;
            display: inline-block;
            text-rendering: auto;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
            -ms-transition: all 1s ease;
            transition: all 1s ease;
            -ms-transform: scale(20, 20);
            /* IE 9 */
            -webkit-transform: scale(20, 20);
            /* Safari */
            transform: scale(20, 20);
            /* Standard syntax */
            opacity: 0;
        }
        
        .animate {
            -ms-transform: scale(1, 1);
            /* IE 9 */
            -webkit-transform: scale(1, 1);
            /* Safari */
            transform: scale(1, 1);
            /* Standard syntax */
            opacity: 1;
        }
        
        .delanimate {
            -ms-transform: scale(10, 10);
            /* IE 9 */
            -webkit-transform: scale(10, 10);
            /* Safari */
            transform: scale(10, 10);
            /* Standard syntax */
            opacity: 0;
        }
        
        .scale {
            transform: scale(1, 1);
            transition: transform 0.5s ease;
        }
        
        #myTextarea {
            font-family: 'Roboto', sans-serif;
            opacity: 0;
            position: absolute;
            color: red;
            background: transparent;
             -webkit-text-fill-color: transparent;
            font-size: 16px;
            padding: 0px;
            margin: 0em;
            color: blue;
            z-index: 10;
            resize: none;
            width: 100%;
            height: 100%;
            white-space: pre-line !important;
          
           
        }
        
        #form {
            width: 300px;
            height: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -150px;
            margin-top: -150px;
            border: 1px solid #e4e4e4;
          
        }

    </style> ```



#### Add js file in your html page

```<script src="js/typingeffect.js"></script> ```

### Add input in html page with attribute 'class' as  'Textarea' 

``` <div id="form">
<input type="text" name="fname" id="myTextarea" class="Textarea">
  </div>
```


```
     Add script ;
      <script>
       $(function() {
        
            $("#myTextarea").typingeffect({
                maxlength: "30"
            })
        });
       </script> 
```


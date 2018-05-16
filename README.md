# Typingeffect
A jQuery plugin to create an animation effect for typing text

### Steps to create .


#### Add js file in your html page

```<script src="js/typingeffect.js"></script> ```

### Add input in html page with attribute 'class' as  'Textarea' 

```<input type="text" name="fname" id="myTextarea" class="Textarea">```


```
     Add script ;
      <script>
       $(function() {
        
            $("#myTextarea").typingeffect({
                bgcolor: 'red',
                txtcolor: 'white',
            })
        });
       </script> 
```


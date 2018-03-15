"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esc0JBQTZCLElBQXVDO0lBQ2xFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQy9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDaEIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNkLFVBQVUsQ0FDWCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFkRCxvQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuXHJcbmRlY2xhcmUgdmFyIE5TQXR0cmlidXRlZFN0cmluZzogYW55O1xyXG5kZWNsYXJlIHZhciBOU0RpY3Rpb25hcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lOiBhbnk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SGludENvbG9yKGFyZ3M6IHsgdmlldzogVGV4dEZpZWxkOyBjb2xvcjogQ29sb3IgfSkge1xyXG4gIGlmIChhcmdzLnZpZXcuYW5kcm9pZCkge1xyXG4gICAgYXJncy52aWV3LmFuZHJvaWQuc2V0SGludFRleHRDb2xvcihhcmdzLmNvbG9yLmFuZHJvaWQpO1xyXG4gIH1cclxuICBpZiAoYXJncy52aWV3Lmlvcykge1xyXG4gICAgbGV0IGRpY3Rpb25hcnkgPSBuZXcgTlNEaWN0aW9uYXJ5KFxyXG4gICAgICBbYXJncy5jb2xvci5pb3NdLFxyXG4gICAgICBbTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lXVxyXG4gICAgKTtcclxuICAgIGFyZ3Mudmlldy5pb3MuYXR0cmlidXRlZFBsYWNlaG9sZGVyID0gTlNBdHRyaWJ1dGVkU3RyaW5nLmFsbG9jKCkuaW5pdFdpdGhTdHJpbmdBdHRyaWJ1dGVzKFxyXG4gICAgICBhcmdzLnZpZXcuaGludCxcclxuICAgICAgZGljdGlvbmFyeVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19
$('button').on('click', function(n) {
            var n = $('#n').val()
            n = Number(n)

            var Sum = function(n) {
                var total = 0
                for (var i = 1; i <= n; i++) {
                    total = total + i
                }
                var result = {
                    "sum": total
                }
                return result
            }


            var ans = function(n) {
                var a = 1
                for (var j = 1; j <= n; j++) {
                    a = a * j
                }
                var result = {
                    "ans": a
                }
                return result
            }

            $('#result-sum').val(total)
            $('#result-ans').val(a)
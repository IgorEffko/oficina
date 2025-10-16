       // Adicionando máscaras de formatação
        document.addEventListener('DOMContentLoaded', function() {
            const telefoneInput = document.getElementById('telefone');
            const cepInput = document.getElementById('cep');
           
            // Máscara para telefone (XX) XXXXX-XXXX
            telefoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                    if (value.length > 10) {
                        value = value.replace(/(\d{5})(\d)/, '$1-$2');
                    }
                }
                e.target.value = value;
            });
           
            // Máscara para CEP XXXXX-XXX
            cepInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 5) {
                    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
                }
                e.target.value = value;
            });
        });

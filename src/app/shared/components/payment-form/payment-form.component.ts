import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'payment-form',
    templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent implements OnInit {
    @Input()
    total: number;
    submitted = false;
    myForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        // e.g. 4539188007788867
        const visaRegex = '^4[0-9]{12}(?:[0-9]{3})?$';

        this.myForm = this.fb.group({
            email: ['', Validators.required],
            creditCard: this.fb.group({
                no: ['', [Validators.required, Validators.pattern(visaRegex)]],
                expiry: ['', Validators.required]
            })
        })

        // subscribe changes
        // this.subcribeToChanges();

        // update form model
        // this.myForm.setValue({
        //     email: 'john@doe.com',
        //     creditCard: {
        //         no: '',
        //         expiry: ''
        //     }
        // });

        // update a field only
        // this.myForm.controls['email'].setValue('jane@doe.com');
    }

    checkout(paymentDetails: PaymentDetails, isValid: boolean) {
        this.submitted = true;
        console.log(paymentDetails, isValid);
    }

    subcribeToChanges() {
        // form status changed
        const myFormStatusChanges$ = this.myForm.statusChanges;
        myFormStatusChanges$.subscribe(x => console.log({ event: 'STATUS_CHANGED', object: x }));

        // form value changed
        const myFormValueChanges$ = this.myForm.valueChanges;
        myFormValueChanges$.subscribe(x => console.log({ event: 'VALUE_CHANGED', object: x }));

        const emailValueChanges$ = this.myForm.controls['email'].valueChanges;
        emailValueChanges$.subscribe(x => console.log({ event: 'EMAIL_CHANGED', object: x }))
    }
}

export interface PaymentDetails {
    email: string;
    creditCard: {
        no: string,
        expiry: string
    }
}
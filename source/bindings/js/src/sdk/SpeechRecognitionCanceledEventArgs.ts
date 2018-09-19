//
// copyright (c) Microsoft. All rights reserved.
// licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//

import { CancellationReason, RecognitionEventArgs } from "./Exports";

/**
 * Defines content of a RecognitionErrorEvent.
 * @class
 */
export class SpeechRecognitionCanceledEventArgs extends RecognitionEventArgs {
    private privReason: CancellationReason;
    private privErrorDetails: string;

    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param reason The cancellation reason.
     * @param errorDetails Error details, if provided.
     * @param offset The offset.
     * @param sessionId The session id.
     */
    public constructor(reason: CancellationReason, errorDetails: string, offset?: number, sessionId?: string) {
        super(offset, sessionId);

        this.privReason = reason;
        this.privErrorDetails = errorDetails;
    }

    /**
     * The reason the recognition was canceled.
     * @return Specifies the reason canceled.
     */
    public get reason(): CancellationReason {
        return this.privReason;
    }

    /**
     * In case of an unsuccessful recognition, provides a details of why the occurred error.
     * This field is only filled-out if the reason canceled (@see getReason) is set to Error.
     * @return A String that represents the error details.
     */
    public get errorDetails(): string {
        return this.privErrorDetails;
    }
}